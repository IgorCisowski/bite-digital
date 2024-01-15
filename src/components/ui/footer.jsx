import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Paragraph from "../elements/paragraph";
export default function Footer() {
  return (
    <footer>
      <div className="space-y-8 py-5">
        <div className="relative">
          <h2 className="text-4xl">Get In Touch</h2>
          <Paragraph className="absolute -top-1 -left-6 py-6 -z-10" />
        </div>

        <div className="flex gap-x-10">
          {/* CONTACT */}
          <div className="flex flex-col justify-between">
            <div>
              {contact.map(({ icon, content, i }) => {
                return (
                  <div className="flex items-center gap-x-2">
                    <div>{icon}</div>
                    <div>{content}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-x-4">
              {socials.map(({ icon, link, i }) => {
                return (
                  <a key={i} href={link}>
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
          {/* ADDRESS */}
          <div>
            <h3 className="text-2xl">Warszawa</h3>
            <p>Nowowiejskiego 68</p>
            <p>61-743 Warszawa</p>
            <p>Poland</p>
          </div>
        </div>
        {/* COPYRIGHT */}
        <div className="text-center text-secondary text-sm">
          <p>© {new Date().getFullYear()} BiteDigital | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

const socials = [
  { icon: <FaFacebookSquare />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaLinkedin />, link: "#" },
];

const contact = [
  { icon: <HiOutlineMail />, content: "contact@bitedigital.com" },
  { icon: <FiPhone />, content: "+48 888 888 888" },
];
