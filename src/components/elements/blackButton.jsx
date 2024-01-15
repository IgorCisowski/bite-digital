import React from "react";

export default function BlackButton({ children }) {
  return (
    <button className="relative z-20 px-6 py-2 bg-gradient-to-r from-cyan to-pink">
      <div className="absolute -z-10 inset-[2px] bg-black"></div>
      <p className="z-10 text-xl">{children}</p>
    </button>
  );
}
