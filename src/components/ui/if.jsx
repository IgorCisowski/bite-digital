import React from "react";

export default function If() {
  return (
    <div className="pb-20">
      <h4 className="text-graphit text-lg">JEŚLI TWÓJ BIZNES JEST:</h4>
      <div>
        {list.map((el) => {
          return (
            <p className="text-3xl" key={el}>
              {el}
            </p>
          );
        })}
      </div>
    </div>
  );
}

const list = [
  "Na początku drogi biznesowej",
  "Skaluje w większym wymiarze",
  "Rozwija się na rynkach lokalnych/EU",
  "Przyjazny dla Klienta końcowego",
  "Wymaga technicznego odświerzenia",
  "Chce zwiększyć konkuręcyjność",
];
