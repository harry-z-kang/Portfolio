use core::fmt;

use yew_router::prelude::*;

#[derive(Clone, Routable, PartialEq, Copy)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/aboutMe")]
    AboutMe,
    #[at("/myWorks")]
    MyWorks,
    #[at("/contactMe")]
    ContactMe,
    #[at("/myFavoriteLyrics")]
    MyFavoriteLyrics,
    #[not_found]
    #[at("/404")]
    PageNotFound,
}

impl fmt::Display for Route {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            Route::Home => write!(f, "Home"),
            Route::AboutMe => write!(f, "About Me"),
            Route::MyWorks => write!(f, "My Works"),
            Route::ContactMe => write!(f, "Contact Me"),
            Route::MyFavoriteLyrics => write!(f, "My Favorite Lyrics"),
            Route::PageNotFound => write!(f, "Page Not Found"),
        }
    }
}
