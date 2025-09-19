import { FC } from "react";
import Icons, { IconAlignment } from "./Icons";
import headerStyles from "../styles/components/Header.module.scss";

interface HeaderProps {
  largeHeading: string;
  smallHeading: string;
}

const Header: FC<HeaderProps> = ({
  largeHeading,
  smallHeading,
}): React.ReactElement => {
  return (
    <div className={headerStyles.landing}>
      <div className={headerStyles.landing__heading}>
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
