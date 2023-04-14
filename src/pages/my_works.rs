use gloo::utils::document;
use serde::Deserialize;
use yew::prelude::*;
use yew_icons::{Icon, IconId};

use crate::components::header::Header;

#[derive(Deserialize, PartialEq, Properties)]
pub struct Project {
    description: String,
    img: String,
    github: String,
    website: String,
    name: String,
}

#[derive(PartialEq, Properties)]
pub struct MyWorksProps {}

#[function_component]
pub fn MyWorks(_: &MyWorksProps) -> Html {
    let file = include_str!("../../static/db/projects.json");
    let projects: Vec<Project> = serde_json::from_str(&file).unwrap();

    use_effect(move || {
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
              <div class="projects__item" >
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
                  <Icon icon_id={IconId::BootstrapEyeFill} /> {project.name.clone()}
                </a>
                <a
                  href={project.github.clone()}
                  class={classes!("btn", "btn-dark")}
                >
                  <Icon icon_id={IconId::SimpleIconsGithub} /> {"Github"}
                </a>
              </div>
            }
          }).collect::<Vec<Html>>()}
        </div>
      </div>
    }
}
