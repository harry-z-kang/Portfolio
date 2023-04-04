use yew::{function_component, classes, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub struct MyFavoriteLyricsProps {}

#[function_component]
pub fn MyFavoriteLyrics(props: &MyFavoriteLyricsProps) -> Html {
    let MyFavoriteLyricsProps {} = props;
    html! {
        <div></div>
    }
}