import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { lyrics } from "../lyrics";
import myFavoriteLyricsStyles from "../styles/myFavoriteLyrics.module.scss";

export const getStaticProps = (() => ({
  props: { lyrics },
})) satisfies GetStaticProps;

const MyFavoriteLyrics = ({
  lyrics,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="container">
      <Head>
        <title>Harry Kang | My Favorite Lyrics</title>
      </Head>
      <Header
        largeHeading="My Favorite Lyrics"
        smallHeading="Maybe some lyrics may intrigue you as well..."
      />
      <div className={myFavoriteLyricsStyles.lyrics}>
        {lyrics.map((lyric, index) => (
          <div className={myFavoriteLyricsStyles.lyrics__item} key={index}>
            <div className={myFavoriteLyricsStyles.lyrics__item__heading}>
              {lyric.title} -- {lyric.artist}
            </div>
            {lyric.lines.map((line, index) => (
              <div
                className={myFavoriteLyricsStyles.lyrics__item__line}
                key={index}
              >
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavoriteLyrics;
