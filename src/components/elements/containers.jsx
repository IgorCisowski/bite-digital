import React from "react";
import Button from "./button";

export default function Containers() {
  return (
    <div className="flex flex-col gap-y-8">
      {aboutUs.map(({ i, heading, content }) => {
        return (
          <div key={i} className="bg-darkGray p-5 space-y-4">
            <h3 className="text-3xl">{heading}</h3>
            <p className="text-secondary">{content}</p>
            <Button>Explore</Button>
          </div>
        );
      })}
    </div>
  );
}

const aboutUs = [
  {
    heading: "Co nas cechuje",
    content:
      "Wyróżnia nas biznesowe podejście do Klienta, które jest ukształtowane przez nasz zespół. Doświadczenie technologiczne, a także sprzedażowe pozwala nam na dopasowanie produktów/usług do potrzeb klienta skupiając się na maksymalizacji efektów końcowych przy jednoczesnym zapewnieniu konkurencyjności technologicznej.",
  },
  {
    heading: "Nasza misja",
    content:
      "Strategia naszych działań jest ukierunkowana na rozwój lokalnych przedsiębiorców zapewniając dostęp do nowoczesnych narzędzi technologicznych.",
  },
];
