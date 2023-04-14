use gloo::utils::document;
use serde::Deserialize;
use yew::prelude::*;

use crate::components::header::Header;

#[derive(Deserialize, PartialEq, Properties)]
pub struct Lyric {
    lines: Vec<String>,
    title: String,
    artist: String,
}

#[derive(PartialEq, Properties)]
pub struct MyFavoriteLyricsProps {}

#[function_component(MyFavoriteLyrics)]
pub fn my_favorite_lyrics(_: &MyFavoriteLyricsProps) -> Html {
    let file = include_str!("../../static/db/lyrics.json");
    let lyrics: Vec<Lyric> = serde_json::from_str(&file).unwrap();

    use_effect(move || {
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
              <div class="lyrics__item">
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
