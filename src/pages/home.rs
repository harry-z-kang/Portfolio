use gloo::utils::document;
use yew::prelude::*;

use crate::components::icons::{IconAlignment, Icons};

#[component]
pub fn Home() -> Html {
    use_effect_with((), move |_| {
        document().set_title("Harry Kang | Home");
    });

    html! {
      <div class="container">
        <h1 class={classes!("lg-heading", "home__heading")}>
          {"Harry "}<span class="text-secondary">{"Kang"}</span>
        </h1>
        <h2 class="sm-heading">
          {"Programmer, Musician, Technology Enthusiast & Verification Engineer @
          arm"}
        </h2>
        <Icons alignment={IconAlignment::Start} />
      </div>
    }
}
