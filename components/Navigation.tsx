import { FC, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import navigationStyles from "../styles/components/Navigation.module.scss";

const titleName: string[] = ["", "aboutMe", "myWorks", "contactMe"];
const navMenu: string[] = ["Home", "About Me", "My Works", "Contact Me"];

const Navigation: FC = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className={navigationStyles.nav}>
      <div
        className={[
          navigationStyles.nav__menuBtn,
          navigationStyles[`nav__menuBtn${showMenu ? "-close" : ""}`],
        ].join(" ")}
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className={navigationStyles.nav__menuBtn__line}></div>
        <div className={navigationStyles.nav__menuBtn__line}></div>
        <div className={navigationStyles.nav__menuBtn__line}></div>
      </div>
      <div
        className={[
          navigationStyles.nav__menu,
          navigationStyles[`nav__menu${showMenu ? "-show" : ""}`],
        ].join(" ")}
      >
        <div
          className={[
            navigationStyles.nav__menu__branding,
            navigationStyles[`nav__menu__branding${showMenu ? "-show" : ""}`],
          ].join(" ")}
        >
          <div className={navigationStyles.nav__menu__branding__portrait}></div>
        </div>
        <ul
          className={[
            navigationStyles.nav__menu__list,
            navigationStyles[`nav__menu__list${showMenu ? "-show" : ""}`],
          ].join(" ")}
        >
          {navMenu.map((navTitle, index) => (
            <li
              className={[
                navigationStyles.nav__menu__list__item,
                navigationStyles[
                  `nav__menu__list__item${showMenu ? "-show" : ""}`
                ],
                navigationStyles[
                  `${
                    titleName[index] === router.pathname.substring(1)
                      ? "nav__menu__list__item-current"
                      : ""
                  }`
                ],
              ].join(" ")}
              onClick={() => {
                setShowMenu(false);
              }}
              key={index}
            >
              <Link href={`/${titleName[index]}`}>
                <a className={navigationStyles.nav__menu__list__item__link}>
                  {navTitle}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
