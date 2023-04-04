use yew::{function_component, classes, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub struct AboutMeProps {}

#[function_component]
pub fn AboutMe(props: &AboutMeProps) -> Html {
    let AboutMeProps {} = props;
    html! {
        <div></div>
    }
}