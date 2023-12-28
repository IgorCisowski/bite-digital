import React from "react";
import BlackButton from "../elements/blackButton";

export default function Hero() {
  return (
    <section className="mb-40">
      <div className="pt-10 pl-5">
        <div className="text-5xl font-semibold mb-4 lg:text-7xl lg:mb-8">
          <h1 className="flex flex-col gap-y-3 mb-4">
            <p>We design, build</p>
            <p>
              and{" "}
              <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-cyan to-pink">
                lunch
              </span>
            </p>
            <p className=" w-max text-black bg-gradient-to-r from-cyan to-pink pb-4">
              digital products
            </p>
          </h1>
        </div>
        <div>
          <p className="text-sm text-text-secondary mb-4 lg:w-1/2 lg:text-2xl lg:mb-8">
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
