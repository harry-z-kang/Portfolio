import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { server } from "../config";
import aboutMeStyles from "../styles/AboutMe.module.scss";

interface Activity {
  title: string;
  description: string;
  details: string[];
}

interface aboutMeProps {
  activities: Activity[];
}

export const getStaticProps: GetStaticProps<aboutMeProps> = async (
  _
): Promise<GetStaticPropsResult<aboutMeProps>> => {
  const res = await fetch(`${server}/api/activities`);
  const activities = await res.json();

  return {
    props: {
      activities,
    },
  };
};

const AboutMe: NextPage<aboutMeProps> = ({ activities }): JSX.Element => {
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
            My name is Zixuan Kang, but most time people call me Harry. I&#39;m
            a senior majoring in Computer Engineering concentrating in VLSI
            Design and Computer Architecture and minoring in Computer Science
            focusing on system & Architecture @ Georgia Institute of Techology.
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
