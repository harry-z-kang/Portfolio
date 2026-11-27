use gloo::utils::document;
use yew::prelude::*;

#[component]
pub fn PageNotFound() -> Html {
    use_effect_with((), move |_| {
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
        {for (0..9).flat_map(|i| (0..11).map(move |j| html! {
          <div key={format!("{i}-{j}")} class={classes!("cell", format!("cell-{i}-{j}"))}></div>
        }))}
      </div>
    }
}
