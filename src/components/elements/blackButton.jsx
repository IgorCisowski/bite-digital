import React from "react";

export default function BlackButton({ children }) {
  return (
    <button className="relative -z-20 px-5 py-2 bg-gradient-to-r from-cyan to-pink">
      <div className="absolute -z-10 left-[2px] top-[2px] right-[2px] bottom-[2px] bg-[#000000]"></div>
      <p className="z-10 w-full text-xl">{children}</p>
    </button>
  );
}
