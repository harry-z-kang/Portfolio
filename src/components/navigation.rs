use yew::prelude::*;
use yew_router::prelude::*;

use crate::route::Route;

const TITLE_NAME: [Route; 5] = [
    Route::Home,
    Route::AboutMe,
    Route::MyWorks,
    Route::ContactMe,
    Route::MyFavoriteLyrics,
];

#[component(Navigation)]
pub fn navigation() -> Html {
    let show_menu = use_state(|| false);
    let menu_button = use_node_ref();
    let router_location = use_route::<Route>().unwrap_or_default();
    let toggle_show_menu = {
        let show_menu = show_menu.clone();
        Callback::from(move |_| show_menu.set(!*show_menu))
    };
    let close_show_menu = {
        let show_menu = show_menu.clone();
        let menu_button = menu_button.clone();
        Callback::from(move |_: MouseEvent| {
            show_menu.set(false);
            if let Some(button) = menu_button.cast::<web_sys::HtmlElement>() {
                let _ = button.focus();
            }
        })
    };
    let close_on_escape = {
        let show_menu = show_menu.clone();
        let menu_button = menu_button.clone();
        Callback::from(move |event: KeyboardEvent| {
            if event.key() == "Escape" && *show_menu {
                event.prevent_default();
                show_menu.set(false);
                if let Some(button) = menu_button.cast::<web_sys::HtmlElement>() {
                    let _ = button.focus();
                }
            }
        })
    };

    html! {
      <nav class="nav" aria-label="Primary" onkeydown={close_on_escape}>
        <button
          ref={menu_button}
          type="button"
          aria-label={if *show_menu {"Close navigation"} else {"Open navigation"}}
          aria-expanded={(*show_menu).to_string()}
          aria-controls="primary-menu"
          class={classes!(
            "nav__menuBtn",
            format!("nav__menuBtn{}", if *show_menu  {"-close"} else {""}),
          )}
          onclick={toggle_show_menu.clone()}
        >
          <span class="nav__menuBtn__line"></span>
          <span class="nav__menuBtn__line"></span>
          <span class="nav__menuBtn__line"></span>
        </button>
        <div
          id="primary-menu"
          inert={!*show_menu}
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
                  key={nav_title.to_path()}
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
      </nav>
    }
}
