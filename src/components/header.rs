use yew::prelude::*;

use crate::components::icons::{IconAlignment, Icons};

#[derive(PartialEq, Properties)]
pub struct HeaderProps {
    pub large_heading: AttrValue,
    pub small_heading: AttrValue,
}

#[component(Header)]
pub fn header(props: &HeaderProps) -> Html {
    let HeaderProps {
        large_heading,
        small_heading,
    } = props;

    let (uncolored_heading, colored_heading) =
        large_heading.split_once(' ').unwrap_or((large_heading, ""));

    html! {
      <div class="landing">
        <div class="landing__heading">
          <h1 class="lg-heading">
            {uncolored_heading}
            {" "}
            <span class="text-secondary">
              {colored_heading}
            </span>
          </h1>
          <h2 class="sm-heading">{small_heading}</h2>
        </div>
        <Icons alignment={IconAlignment::Center} />
      </div>
    }
}
