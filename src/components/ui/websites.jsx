import React from "react";

export default function Websites() {
  return (
    <div className="py-20">
      <div className="mb-2">
        <h3 className="text-pink text-3xl mb-2">Strony Internetowe</h3>
        <p>
          Wspieramy Klientów z sektora małych i średnich firm w procesie
          tworzenia spersonalizowanej strony internetowej wraz z doradztwem w
          zakresie modułów oraz nowoczesnych funkcjonalności.
        </p>
      </div>
      <div className="relative">
        {services.map((el, i) => {
          return (
            <div key={i} className="flex items-center gap-x-3 text-3xl">
              <div className="w-3 h-3 rounded-full bg-cyan"></div>
              <p>{el}</p>
            </div>
          );
        })}
        <div className="absolute top-4 left-1 w-[4px] h-[88%] bg-cyan"></div>
      </div>
    </div>
  );
}

const services = [
  "Wykup domeny",
  "Omówienie design",
  "Ustalenie sekcji",
  "Przygotowanie treści",
  "Implementacja załączników",
  "Integracja z systemami",
  "Testy",
  "Wsparcie serwisowe",
];
