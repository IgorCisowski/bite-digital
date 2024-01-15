import React, { useState } from "react";
import Button from "../elements/button";
import BurgerMenu from "../elements/burgerMenu";
import logo from "../../images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    isOpen
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };

  return (
    <header>
      <nav className="relative z-50 flex justify-between items-center py-4">
        <div className="object-cover w-1/4">
          <img src={logo} alt="logo" />
        </div>
        <BurgerMenu handleOpen={handleOpen} isOpen={isOpen} />
        {/* MOBILE */}
        <ul
          className={`${
            isOpen
              ? "translate-x-0 duration-300 "
              : "-translate-x-full duration-300 "
          } text-3xl flex flex-col justify-center gap-y-6 px-6 absolute -z-10 top-0 -left-6 w-screen h-screen bg-black lg:hidden`}
        >
          {navLinks.map(({ title, i, link }) => {
            return (
              <li key={i} onClick={handleOpen}>
                <a href={`#${link}`}>{title}</a>
              </li>
            );
          })}
          <li onClick={handleOpen}>
            <a href="#Contact">Get in touch</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const navLinks = [
  { title: "Services", link: "Services" },
  { title: "About", link: "About" },
  { title: "Case Study", link: "Case Study" },
  { title: "Cooperation", link: "Cooperation" },
];

{
  /* DESKTOP */
}
{
  /* <ul className="hidden lg:flex items-center gap-6 text-sm">
          {navLinks.map(({ title, i, link }) => {
            return (
              <li key={i}>
                <a href={`#${link}`}>{title}</a>
              </li>
            );
          })}
          <Button>
            <a href="#Contact">Get in touch</a>{" "}
          </Button>
        </ul> */
}
