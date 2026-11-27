use gloo::utils::document;
use serde::Deserialize;
use yew::prelude::*;
use yew_icons::{Icon, IconData};

use crate::components::header::Header;

#[derive(Deserialize, PartialEq)]
pub struct Project {
    description: String,
    img: String,
    github: String,
    website: String,
    name: String,
}

#[component]
pub fn MyWorks() -> Html {
    let projects = use_memo((), |_| {
        serde_json::from_str::<Vec<Project>>(include_str!("../../static/db/projects.json"))
            .expect("embedded projects data must be valid JSON")
    });

    use_effect_with((), move |_| {
        document().set_title("Harry Kang | My Works");
    });

    html! {
      <div class="container">
        <Header
          large_heading="My Work"
          small_heading="Check out some of my projects..."
        />
        <div class="projects">
          {projects.iter().map(|project| {
            html! {
              <div key={project.name.clone()} class="projects__item" >
                <a
                  href={project.website.clone()}
                  class="projects__item__card"
                >
                  <img
                    class="projects__item__card__img"
                    src={format!("/static/assets/project/{}", project.img)}
                    alt={project.name.clone()}
                  />
                  <p class="projects__item__card__desc">
                    {project.description.clone()}
                  </p>
                </a>
                <a
                  href={project.website.clone()}
                  class={classes!("btn", "btn-light")}
                >
                  <Icon data={IconData::BOOTSTRAP_EYE_FILL} /> {project.name.clone()}
                </a>
                <a
                  href={project.github.clone()}
                  class={classes!("btn", "btn-dark")}
                >
                  <Icon data={IconData::SIMPLE_ICONS_GITHUB} /> {"Github"}
                </a>
              </div>
            }
          }).collect::<Vec<Html>>()}
        </div>
      </div>
    }
}
