use gloo::utils::document;
use serde::Deserialize;
use yew::prelude::*;

use crate::components::header::Header;

#[derive(Deserialize, PartialEq)]
pub struct Lyric {
    lines: Vec<String>,
    title: String,
    artist: String,
}

#[component]
pub fn MyFavoriteLyrics() -> Html {
    let lyrics = use_memo((), |_| {
        serde_json::from_str::<Vec<Lyric>>(include_str!("../../static/db/lyrics.json"))
            .expect("embedded lyrics data must be valid JSON")
    });

    use_effect_with((), move |_| {
        document().set_title("Harry Kang | My Favorite Lyrics");
    });

    html! {
      <div class="container">
        <Header
          large_heading="My Favorite Lyrics"
          small_heading="Maybe some lyrics may intrigue you as well..."
        />
        <div class="lyrics">
          {lyrics.iter().map(|lyric| {
            html! {
              <div key={format!("{}-{}", lyric.artist, lyric.title)} class="lyrics__item">
                <div class="lyrics__item__heading">
                  {lyric.title.clone()}{" -- "}{lyric.artist.clone()}
                </div>
                {lyric.lines.iter().map(|line| {
                  html! {
                    <div class="lyrics__item__line">
                      {line}
                    </div>
                  }
                }).collect::<Vec<Html>>()}
              </div>
            }
          }).collect::<Vec<Html>>()}
        </div>
      </div>
    }
}
