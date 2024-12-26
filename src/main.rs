mod components;
mod pages;
mod route;

use yew::{function_component, html, Html};
use yew_router::prelude::*;

use crate::pages::about_me::AboutMe;
use crate::pages::contact_me::ContactMe;
use crate::pages::home::Home;
use crate::pages::my_favorite_lyrics::MyFavoriteLyrics;
use crate::pages::my_works::MyWorks;
use crate::pages::page_not_found::PageNotFound;

use crate::components::navigation::Navigation;

use crate::route::Route;

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! { <Home/> },
        Route::AboutMe => html! { <AboutMe/> },
        Route::MyWorks => html! { <MyWorks/> },
        Route::ContactMe => html! { <ContactMe/> },
        Route::MyFavoriteLyrics => html! { <MyFavoriteLyrics/> },
        Route::PageNotFound => html! { <PageNotFound/> },
    }
}

#[function_component]
fn App() -> Html {
    html! {
      <BrowserRouter>
        <Navigation/>
        <Switch<Route> render={switch}/>
      </BrowserRouter>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
