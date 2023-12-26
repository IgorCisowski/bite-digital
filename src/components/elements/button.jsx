import React from "react";

export default function Button({ children }) {
  return (
    <button className="px-5 py-2 bg-gradient-to-r from-cyan to-pink">
      {children}
    </button>
  );
}
