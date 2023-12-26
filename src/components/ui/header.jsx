import React, { useState } from "react";
import Button from "../elements/button";
import BurgerMenu from "./burgerMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    isOpen
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };

  return (
    <header className="relative w-full">
      <nav className="flex items-center justify-between px-5 py-5 border-b-[1px] border-[#333]">
        <div>LOGO</div>
        <BurgerMenu handleOpen={handleOpen} isOpen={isOpen} />
        {/* MOBILE */}
        <ul
          className={`${
            isOpen
              ? "translate-x-0 duration-300 "
              : "-translate-x-full duration-300 "
          } flex flex-col justify-center px-5 absolute top-0 left-0 -z-10 w-full h-screen bg-black lg:hidden`}
        >
          {navLinks.map(({ title, i, link }) => {
            return (
              <li key={i} className="text-3xl mb-5" onClick={handleOpen}>
                <a href={`#${link}`}>{title}</a>
              </li>
            );
          })}
          <li className="text-3xl mb-5" onClick={handleOpen}>
            <a href="#Contact">Get in touch</a>
          </li>
        </ul>
        {/* DESKTOP */}
        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map(({ title, i, link }) => {
            return (
              <li key={i}>
                <a href={`#${link}`}>{title}</a>
              </li>
            );
          })}
          <li>
            <Button>Get in touch</Button>
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
