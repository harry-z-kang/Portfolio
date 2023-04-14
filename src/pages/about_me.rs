use gloo::utils::document;
use serde::Deserialize;
use yew::prelude::*;

use crate::components::header::Header;

#[derive(Deserialize, PartialEq, Properties)]
pub struct Activity {
    title: String,
    description: String,
    details: Vec<String>,
}

#[derive(PartialEq, Properties)]
pub struct AboutMeProps {}

#[function_component(AboutMe)]
pub fn about_me(_: &AboutMeProps) -> Html {
    let file = include_str!("../../static/db/activities.json");
    let activities: Vec<Activity> = serde_json::from_str(&file).unwrap();

    use_effect(move || {
        document().set_title("Harry Kang | About Me");
    });

    html! {
      <div class="container">
        <Header
          large_heading="About Me"
          small_heading="Let me tell you a few things..."
        />
        <div class="about">
          <div class="about__bioImage"></div>
          <div class="about__bio">
          <h3 class="text-secondary">{"BIO"}</h3>
            <p>
              {"My name is Zixuan Kang, but most time people call me Harry. I
              graduated from Georgia Institute of Techology in May, 2022 majoring
              in Computer Engineering concentrating in VLSI Design and Computer
              Architecture and minoring in Computer Science focusing on system &
              Architecture. I'm now working full-time with Arm Inc. as a
              verification engineer."}
            </p>
          </div>
          {activities.iter().map(|activity| {
            html! {
              <div class="about__job">
                <h3>{activity.title.clone()}</h3>
                <h5>{activity.description.clone()}</h5>
                <p>
                  {activity.details.iter().map(|detail| {
                    html! {
                      <span>
                        {"- "}{detail}
                        <br />
                      </span>
                    }
                  }).collect::<Vec<Html>>()}
                </p>
              </div>
            }
          }).collect::<Vec<Html>>()}
        </div>
      </div>
    }
}
