import { FC } from "react";
import Icons, { IconAlignment } from "./Icons";
import "./Header.scss";

interface HeaderProps {
  largeHeading: string;
  smallHeading: string;
}

const Header: FC<HeaderProps> = ({ largeHeading, smallHeading }): JSX.Element => {
  return (
    <div className="landing">
      <div className="landing__heading">
        <h1 className="lg-heading">
          {largeHeading.split(" ")[0]}{" "}
          <span className="text-secondary">
            {largeHeading.split(" ").splice(1).join(" ")}
          </span>
        </h1>
        <h2 className="sm-heading">{smallHeading}</h2>
      </div>
      <Icons alignment={IconAlignment.Center} />
    </div>
  );
};

export default Header;
