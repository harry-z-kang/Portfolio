use gloo::utils::document;
use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct PageNotFoundProps {}

#[function_component]
pub fn PageNotFound(_: &PageNotFoundProps) -> Html {
    use_effect(move || {
        document().set_title("Uhhh Ohhh...");
    });

    html! {
      <div class="matrix">
        <code class="code">
          {"A: Knock knock"}
          <br /> {"B: Who's there?"}
          <br /> {"A: A local returned by reference"}
          <br /> {"B: reference to who?"}
          <br /> {"A: Segmentation fault"}
        </code>
        {(0..9).map(|i| {
          (0..11).map(|j| {
            html! {
              <div
                class={classes!("cell", format!("cell-{}-{}", i, j))}
              ></div>
            }
          }).collect::<Vec<Html>>()
        }).collect::<Vec<Vec<Html>>>()
        .into_iter().flatten().collect::<Vec<Html>>()}
      </div>
    }
}
