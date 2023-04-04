use yew::{function_component, classes, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub struct PageNotFoundProps {}

#[function_component]
pub fn PageNotFound(props: &PageNotFoundProps) -> Html {
    let PageNotFoundProps {} = props;
    html! {
        <div></div>
    }
}