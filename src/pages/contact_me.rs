use gloo::{timers::callback::Timeout, utils::document};
use wasm_bindgen_futures::{JsFuture, spawn_local};
use web_sys::window;
use yew::prelude::*;
use yew_icons::{Icon, IconData};

use crate::components::header::Header;

const EMAIL: &str = "harry.z.kang@outlook.com";
const PHONE_NUMBER: &str = "+1 (470) 398-7810";

#[component]
pub fn ContactMe() -> Html {
    let phone_number_copied = use_state(|| false);

    use_effect_with((), move |_| {
        document().set_title("Harry Kang | Contact Me");
    });

    fn clipboard_callback(
        use_state_var: &UseStateHandle<bool>,
        clipboard_text: String,
    ) -> Callback<MouseEvent> {
        let use_state_var = use_state_var.clone();
        Callback::from(move |_| {
            let window = window().expect("no global `window` exists");
            let navigator = window.navigator();
            let clipboard = navigator.clipboard();
            let promise = clipboard.write_text(&clipboard_text);
            let use_state_var_clone = use_state_var.clone();
            let future = async move {
                match JsFuture::from(promise).await {
                    Ok(_) => {
                        use_state_var_clone.set(true);
                        Timeout::new(1_000, move || use_state_var_clone.set(false)).forget();
                    }
                    Err(_) => use_state_var_clone.set(false),
                }
            };
            spawn_local(future);
        })
    }

    let copy_phone_number = clipboard_callback(&phone_number_copied, String::from(PHONE_NUMBER));

    html! {
      <div class="container">
        <Header
          large_heading="Contact Me"
          small_heading="This is how you can reach me..."
        />
        <div class="boxes">
          <div class="boxes__box">
            <a href="mailto:harry.z.kang@outlook.com">
              <span class="text-secondary">{"Email: "}</span>
              {EMAIL}
            </a>
          </div>
          <button
            type="button"
            aria-label={if *phone_number_copied {"Phone number copied"} else {"Copy phone number"}}
            class="boxes__box"
            onclick={copy_phone_number.clone()}
          >
            <Icon
              width={"1em".to_owned()} height={"1em".to_owned()}
              style={format!("color: {}", if *phone_number_copied {"green"} else {"black"})}
              data={if *phone_number_copied {IconData::BOOTSTRAP_CLIPBOARD_CHECK_FILL} else {IconData::BOOTSTRAP_CLIPBOARD_FILL}}
              class="boxes__box__clip"
            />
            <span class="text-secondary">{"Phone Number: "}</span>
            {PHONE_NUMBER}
          </button>
        </div>
        <p role="status" aria-live="polite">
          {if *phone_number_copied {"Copied to clipboard."} else {""}}
        </p>
      </div>
    }
}
