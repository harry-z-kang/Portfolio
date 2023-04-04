use yew::{function_component, classes, html, Html, Properties};

use crate::components::icons::{IconAlignment, Icons};

#[derive(PartialEq, Properties)]
pub struct HomeProps {}

#[function_component(Home)]
pub fn home(props: &HomeProps) -> Html {
    let HomeProps {} = props;
    html! {
      <div class={classes!("container")}>

        <h1 class={classes!("lg-heading", "home__heading")}>
          {"Harry"} <span class="text-secondary">{"Kang"}</span>
        </h1>
        <h2 class={classes!("sm-heading")}>
          {"Programmer, Musician, Technology Enthusiast & Verification Engineer @
          arm"}
        </h2>
        <Icons alignment={IconAlignment::Start} />
      </div>
    }
}