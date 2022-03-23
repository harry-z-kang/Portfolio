import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { server } from "../config";
import myFavoriteLyricsStyles from "../styles/myFavoriteLyrics.module.scss";

interface Lyric {
  lines: string[];
  title: string;
  artist: string;
}

interface myFavoriteLyricsProps {
  lyrics: Lyric[];
}

export const getServerSideProps: GetServerSideProps<
  myFavoriteLyricsProps
> = async (): Promise<GetServerSidePropsResult<myFavoriteLyricsProps>> => {
  const res = await fetch(`${server}/api/lyrics`);
  const lyrics = await res.json();

  return {
    props: {
      lyrics,
    },
  };
};

const MyFavoriteLyrics: NextPage<myFavoriteLyricsProps> = ({
  lyrics,
}): JSX.Element => {
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
