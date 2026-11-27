mod components;
mod pages;
mod route;

use yew::{Html, component, html};
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

#[component]
fn App() -> Html {
    html! {
      <BrowserRouter>
        <Navigation/>
        <main id="main-content">
          <Switch<Route> render={switch}/>
        </main>
      </BrowserRouter>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
