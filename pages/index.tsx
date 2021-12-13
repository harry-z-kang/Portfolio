import type { NextPage } from "next";
import Head from "next/head";
import Icons, { IconAlignment } from "../components/Icons";
import homeStyles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Harry Kang | Home</title>
        <meta name="description" content="Harry Kang's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={["lg-heading", homeStyles.home__heading].join(" ")}>
        Harry <span className="text-secondary">Kang</span>
      </h1>
      <h2 className="sm-heading">
        Programmer, Musician, Technology Enthusiast & Verification Engineer @
        arm
      </h2>
      <Icons alignment={IconAlignment.Start} />
    </div>
  );
};

export default Home;
