import { FC } from "react";
import Header from "./common/Header";
import "./AboutMe.scss";

const AboutMe: FC = (): JSX.Element => {
  return (
    <div className="container">
      <Header
        largeHeading="About Me"
        smallHeading="Let me tell you a few things..."
      />
      <div className="about">
        <div className="about__bioImage"></div>
        <div className="about__bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            My name is Zixuan Kang, but most time people call me Harry. I'm
            right now a freshman (sophomore by credit) in Georgia Tech. I major
            in Computer Engineering right now and plan to minor in Computer
            Science from my second year.
          </p>
        </div>
        <div className="about__job">
          <h3>GT iOS Club</h3>
          <h6>Learning Swift & Apple User Interface Design</h6>
          <p>
            I participated in the GT iOS Club since my second semester in
            Gerogia Tech. Before participating in the club, I have already made
            some small apps with swift and the powerful UI Kit. The club will
            deepen my understanding of app coding and sharpen my skill in making
            apps with swift.
          </p>
        </div>
        <div className="about__job">
          <h3>School Choir</h3>
          <h6>Piano Accompanist & Partner Training</h6>
          <p>
            In my high school, I was the piano accompanist and we performed
            every year on the shcool New Year Gala. Stepping into college, I
            participated in the school Glee Club. This is a choir that doesn't
            require an accompanist, but I still play for the choir when they are
            practicing.
          </p>
        </div>
        <div className="about__job">
          <h3>GT SCPC Tech Team</h3>
          <h6>Web Development & Design</h6>
          <p>
            We are currently on a web application that can show most of the
            activities of the Student Centre Program Council via React.js. We
            are also building an API for volunteer application and volunteer
            attendance at the backend. I'm in charge of the frontend and the
            bhackend team focusing on data and the data analysis at the backend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
