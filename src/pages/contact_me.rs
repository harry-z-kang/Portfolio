use yew::{function_component, classes, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub struct ContactMeProps {}

#[function_component]
pub fn ContactMe(props: &ContactMeProps) -> Html {
    let ContactMeProps {} = props;
    html! {
        <div></div>
    }
}