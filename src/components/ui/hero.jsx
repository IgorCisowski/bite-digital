import React from "react";
import BlackButton from "../elements/blackButton";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="space-y-4">
        <h1 className="text-5xl">
          <p>We design, build</p>
          <p>
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-pink">
              launch
            </span>
          </p>
          <p className=" text-black bg-gradient-to-r from-cyan to-pink">
            digital products
          </p>
        </h1>
        <div>
          <p className="text-secondary text-sm">
            From idea discovery to product growth - we can help you at every
            stage of the product development lifecycle. Conquer the target
            market with a truly invested team by your side
          </p>
        </div>
        <BlackButton>Get in touch</BlackButton>
      </div>
    </section>
  );
}
