import clsx from "clsx";
import { useState } from "react";
import css from "./MainNav.module.css";

export default function MainNav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <button
        className={css.burger}
        onClick={() => {
          console.log(navIsOpen);
          setNavIsOpen(!navIsOpen);
        }}
      >
        =
      </button>
      <nav className={css.root}>
        <ul
          className={clsx(css.menu, {
            [css.mobileMenuOpen]: navIsOpen,
          })}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <a href="#">Useful Things</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
