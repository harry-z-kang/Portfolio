use yew::prelude::*;
use yew_router::prelude::*;

use crate::route::Route;

#[derive(PartialEq, Properties)]
pub struct NavigationProps {}

const TITLE_NAME: [Route; 5] = [
    Route::Home,
    Route::AboutMe,
    Route::MyWorks,
    Route::ContactMe,
    Route::MyFavoriteLyrics,
];

#[function_component(Navigation)]
pub fn navigation(_: &NavigationProps) -> Html {
    let show_menu = use_state(|| false);
    let router_location = use_route::<Route>().unwrap_or_default();
    let toggle_show_menu = {
        let show_menu = show_menu.clone();
        Callback::from(move |_| show_menu.set(!*show_menu))
    };
    let close_show_menu = {
        let show_menu = show_menu.clone();
        Callback::from(move |_| show_menu.set(false))
    };

    html! {
      <div class="nav">
        <div
          class={classes!(
            "nav__menuBtn",
            format!("nav__menuBtn{}", if *show_menu  {"-close"} else {""}),
          )}
          onclick={toggle_show_menu.clone()}
        >
          <div class="nav__menuBtn__line"></div>
          <div class="nav__menuBtn__line"></div>
          <div class="nav__menuBtn__line"></div>
        </div>
        <div
          class={classes!(
            "nav__menu",
            format!("nav__menu{}", if *show_menu {"-show"} else {""})
          )}
        >
          <div
            class={classes!(
              "nav__menu__branding",
              format!("nav__menu__branding{}", if *show_menu {"-show"} else {""})
            )}
          >
            <div class="nav__menu__branding__portrait"></div>
          </div>
          <ul
            class={classes!(
              "nav__menu__list",
              format!("nav__menu__list{}", if *show_menu {"-show"} else {""})
            )}
          >
            {TITLE_NAME.into_iter().map(|nav_title| {
              html! {
                <li
                  class={classes!(
                    "nav__menu__list__item",
                    format!("nav__menu__list__item{}", if *show_menu {"-show"} else {""}),
                    if nav_title == router_location {"nav__menu__list__item-current"} else {""}
                  )}
                  onclick={close_show_menu.clone()}
                >
                  <Link<Route> to={nav_title} classes="nav__menu__list__item__link">
                    {nav_title.to_string()}
                  </Link<Route>>
                </li>
              }
            }).collect::<Html>()}
          </ul>
        </div>
      </div>
    }
}
