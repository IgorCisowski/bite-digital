import React from "react";

export default function Webapps() {
  return (
    <div className="pb-20">
      <div className="mb-2">
        <h3 className="text-cyan text-3xl mb-2">Aplikacje Webowe</h3>
        <p>
          Wspieramy Klientów z sektora małych i średnich firm w tworzeniu
          dopasowanych do modelu biznesowego aplikacji webowych z doradztwem w
          zakresie modułów oraz nowoczesnych funkcjonalności wraz z opracowaniem
          strategii rozwoju aplikacji oraz jej utrzymania.
        </p>
      </div>
      <div className="relative">
        {services.map((el, i) => {
          return (
            <div key={i} className="flex items-center gap-x-3 text-3xl">
              <div className="w-3 h-3 rounded-full bg-pink"></div>
              <p>{el}</p>
            </div>
          );
        })}
        <div className="absolute top-4 left-1 w-[4px] h-[88%] bg-pink"></div>
      </div>
    </div>
  );
}

const services = [
  "Edukacja na temat aplikacji",
  "Omówienie funkcjonalności",
  "Plusy i minusy",
  "Przygotowanie strategii",
  "UX/UI Desig",
  "Testowanie",
  "Wsparcie serwisowe",
];
