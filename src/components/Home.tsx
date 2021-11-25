import { FC, useEffect } from "react";
import Icons, { IconAlignment } from "./common/Icons";
import "./Home.scss";

const Home: FC = (): JSX.Element => {
  useEffect(() => {
    document.title = "Home";
  })

  return (
    <div className="container" id="home">
      <h1 className="lg-heading home__heading">
        Harry <span className="text-secondary">Kang</span>
      </h1>
      <h2 className="sm-heading">Programmer, Musician, Technology Enthusiast & Verification Engineer @ arm</h2>
      <Icons alignment={IconAlignment.Start} />
    </div>
  );
};

export default Home;
