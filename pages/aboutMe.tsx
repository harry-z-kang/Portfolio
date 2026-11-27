import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { activities } from "../activities";
import aboutMeStyles from "../styles/aboutMe.module.scss";

export const getStaticProps = (() => ({
  props: { activities },
})) satisfies GetStaticProps;

const AboutMe = ({ activities }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="container">
      <Head>
        <title>Harry Kang | About Me</title>
      </Head>
      <Header
        largeHeading="About Me"
        smallHeading="Let me tell you a few things..."
      />
      <div className={aboutMeStyles.about}>
        <div className={aboutMeStyles.about__bioImage}></div>
        <div className={aboutMeStyles.about__bio}>
          <h3 className="text-secondary">BIO</h3>
          <p>
            My name is Zixuan Kang, but most time people call me Harry. I
            graduated from Georgia Institute of Techology in May, 2022 majoring
            in Computer Engineering concentrating in VLSI Design and Computer
            Architecture and minoring in Computer Science focusing on system &
            Architecture. I&#39;m now working full-time with Arm Inc. as a
            verification engineer.
          </p>
        </div>
        {activities.map((activity, index) => (
          <div className={aboutMeStyles.about__job} key={index}>
            <h3>{activity.title}</h3>
            <h5>{activity.description}</h5>
            <p>
              {activity.details.map((detail, index) => (
                <span key={index}>
                  - {detail}
                  <br />
                  {index !== activity.details.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
