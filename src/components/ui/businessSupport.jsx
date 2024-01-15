import React from "react";
import Websites from "./websites";
import Webapps from "./webapps";

export default function BusinessSupport() {
  return (
    <section>
      <div className="text-center space-y-4">
        <h2 className="text-4xl">
          <p> Jak wspieramy</p>
          <p>Twój biznes?</p>
        </h2>
        <p className="text-sm">
          Wspieramy Klientów z sektora małych i średnich
          <br /> firm w procesie tworzenia spersonalizownych
          <br /> produktów.
        </p>
      </div>

      <Websites />
      <Webapps />
    </section>
  );
}
