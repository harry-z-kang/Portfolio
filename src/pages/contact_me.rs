use gloo::{timers::callback::Timeout, utils::document};
use wasm_bindgen_futures::{spawn_local, JsFuture};
use web_sys::window;
use yew::prelude::*;
use yew_icons::{Icon, IconId};

use crate::components::header::Header;

#[derive(PartialEq, Properties)]
pub struct ContactMeProps {}

#[function_component(ContactMe)]
pub fn contact_me(_: &ContactMeProps) -> Html {
    let phone_number_copied = use_state(|| false);
    let address_copied = use_state(|| false);

    use_effect(move || {
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
            let clipboard = navigator.clipboard().expect("Clipboard API not supported");
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

    let copy_phone_number = clipboard_callback(&phone_number_copied, String::from("+14703987810"));
    let copy_address = clipboard_callback(
        &address_copied,
        String::from("Apt 1528, 200 W Monroe St., Phoenix, AZ, 85003-1763"),
    );

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
              {"harry.z.kang@outlook.com"}
            </a>
          </div>
          <div
            class="boxes__box"
            onclick={copy_phone_number.clone()}
          >
            <Icon
              width={"1em".to_owned()} height={"1em".to_owned()}
              style={format!("color: {}", if *phone_number_copied {"green"} else {"black"})}
              icon_id={if *phone_number_copied {IconId::BootstrapClipboardCheckFill} else {IconId::BootstrapClipboardFill}}
              class="boxes__box__clip"
            />
            <span class="text-secondary">{"Phone Number: "}</span>
            {"+1 (470) 398-7810"}
          </div>
          <div
            class="boxes__box"
            onclick={copy_address.clone()}
          >
            <Icon
              width={"1em".to_owned()} height={"1em".to_owned()}
              style={format!("color: {}", if *address_copied {"green"} else {"black"})}
              icon_id={if *address_copied {IconId::BootstrapClipboardCheckFill} else {IconId::BootstrapClipboardFill}}
              class="boxes__box__clip"
            />
            <span class="text-secondary">{"Address: "}</span>
            {"Apt 1528, 200 W Monroe St., Phoenix, AZ, 85003-1763"}
          </div>
        </div>
      </div>
    }
}
