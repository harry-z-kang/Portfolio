use yew::prelude::*;

use crate::components::icons::{IconAlignment, Icons};

#[derive(PartialEq, Properties)]
pub struct HeaderProps {
    pub large_heading: String,
    pub small_heading: String,
}

#[function_component(Header)]
pub fn header(props: &HeaderProps) -> Html {
    let HeaderProps {
        large_heading,
        small_heading,
    } = props;

    let large_heading_tokens: Vec<&str> = large_heading.split_whitespace().collect();
    let uncolored_heading = large_heading_tokens[0];
    let colored_heading = large_heading_tokens
        .iter()
        .skip(1)
        .map(|s| *s)
        .collect::<Vec<&str>>()
        .join(" ");

    html! {
      <div class="landing">
        <div class="landing__heading">
          <h1 class="lg-heading">
            {uncolored_heading}
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
