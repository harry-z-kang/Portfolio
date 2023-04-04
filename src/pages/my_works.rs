use yew::{function_component, classes, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub struct MyWorksProps {}

#[function_component]
pub fn MyWorks(props: &MyWorksProps) -> Html {
    let MyWorksProps {} = props;
    html! {
        <div></div>
    }
}