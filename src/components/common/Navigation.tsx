import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

enum NavTitle {
  Home = "Home",
  AboutMe = "About Me",
  MyWork = "My Work",
  ContactMe = "Contact Me",
}

const Navigation: FC = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [title, setTitle] = useState<NavTitle>(NavTitle.Home);

  return (
    <div className="nav">
      <div
        className={`nav__menuBtn nav__menuBtn${showMenu ? "-close" : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="nav__menuBtn__line"></div>
        <div className="nav__menuBtn__line"></div>
        <div className="nav__menuBtn__line"></div>
      </div>
      <div className={`nav__menu nav__menu${showMenu ? "-show" : ""}`}>
        <div
          className={`nav__menu__branding nav__menu__branding${
            showMenu ? "-show" : ""
          }`}
        >
          <div className="nav__menu__branding__portrait"></div>
        </div>
        <ul
          className={`nav__menu__list nav__menu__list${
            showMenu ? "-show" : ""
          }`}
        >
          {(Object.keys(NavTitle) as (keyof object)[]).map(
            (navTitle, index) => (
              <li
                className={`nav__menu__list__item nav__menu__list__item${
                  showMenu ? "-show" : ""
                } ${navTitle === title ? "nav__menu__list__item-current" : ""}`}
                onClick={() => {
                  setTitle(navTitle as NavTitle);
                  setShowMenu(false);
                }}
                key={index}
              >
                <Link
                  to={`/${navTitle}`}
                  className="nav__menu__list__item__link"
                >
                  {NavTitle[navTitle]}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
