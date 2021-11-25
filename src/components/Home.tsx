import { FC } from "react";
import Icons, { IconAlignment } from "./common/Icons";
import "./Home.scss";

const Home: FC = () => {
  return (
    <div className="container">
      <h1 className="lg-heading home__heading">
        Harry <span className="text-secondary">Kang</span>
      </h1>
      <h2 className="sm-heading">Programmer, Musician & Web Developer</h2>
      <Icons alignment={IconAlignment.Start} />
    </div>
  );
};

export default Home;
