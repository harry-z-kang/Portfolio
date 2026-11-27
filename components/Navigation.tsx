import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import navigationStyles from "../styles/components/Navigation.module.scss";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/aboutMe", label: "About Me" },
  { href: "/myWorks", label: "My Works" },
  { href: "/contactMe", label: "Contact Me" },
  { href: "/myFavoriteLyrics", label: "My Favorite Lyrics" },
] as const;

export default function Navigation() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setShowMenu(false);
    menuButton.current?.focus({ preventScroll: true });
  };

  return (
    <nav className={navigationStyles.nav} aria-label="Primary" onKeyDown={(event) => {
      if (event.key === "Escape" && showMenu) {
        event.preventDefault();
        closeMenu();
      }
    }}>
      <button
        ref={menuButton}
        type="button"
        aria-label={showMenu ? "Close navigation" : "Open navigation"}
        aria-expanded={showMenu}
        aria-controls="primary-menu"
        className={[navigationStyles.nav__menuBtn, showMenu && navigationStyles["nav__menuBtn-close"]].filter(Boolean).join(" ")}
        onClick={() => setShowMenu((open) => !open)}
      >
        <span className={navigationStyles.nav__menuBtn__line} />
        <span className={navigationStyles.nav__menuBtn__line} />
        <span className={navigationStyles.nav__menuBtn__line} />
      </button>
      <div id="primary-menu" inert={!showMenu} className={[navigationStyles.nav__menu, showMenu && navigationStyles["nav__menu-show"]].filter(Boolean).join(" ")}>
        <div aria-hidden="true" className={[navigationStyles.nav__menu__branding, showMenu && navigationStyles["nav__menu__branding-show"]].filter(Boolean).join(" ")}>
          <div className={navigationStyles.nav__menu__branding__portrait} />
        </div>
        <ul className={[navigationStyles.nav__menu__list, showMenu && navigationStyles["nav__menu__list-show"]].filter(Boolean).join(" ")}>
          {navigationItems.map(({ href, label }) => (
            <li key={href} className={[
              navigationStyles.nav__menu__list__item,
              showMenu && navigationStyles["nav__menu__list__item-show"],
              router.pathname === href && navigationStyles["nav__menu__list__item-current"],
            ].filter(Boolean).join(" ")}>
              <Link href={href} aria-current={router.pathname === href ? "page" : undefined} onClick={closeMenu} className={navigationStyles.nav__menu__list__item__link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
