import React from "react";

export default function Zyskujesz() {
  return (
    <div className="pb-20">
      <div>
        <h3 className="text-cyan text-3xl mb-2">Co zyskujesz</h3>
      </div>
      <div className="relative space-y-5">
        {services.map(({ heading, content, i }) => {
          return (
            <div key={i} className="flex items-baseline gap-x-3">
              <div className=" min-w-3 h-3 rounded-full bg-cyan"></div>
              <div>
                <h3 className="text-3xl mb-2">{heading}</h3>
                <p className="text-secondary">{content}</p>
              </div>
            </div>
          );
        })}
        <div className="absolute top-0 left-1 w-[4px] h-[82%] bg-cyan"></div>
      </div>
    </div>
  );
}

const services = [
  {
    heading: "Transparentność",
    content:
      "Uważamy, że każdy biznes prowadzi się w sposób otwarty, dlatego komunikacje z Klientem dostosowywujemy do realiów biznesowych, przedstawiając realne zagrożenia oraz szanse każdego projektu.",
  },
  {
    heading: "Jakość",
    content:
      "Rozwijamy się poprzez zadowolenie naszych klientów, które jest dla nas maksymalnym priorytetem dla każdego kontaktu, spotkania, projektu oraz relacji.",
  },
  {
    heading: "Innowacyjność",
    content:
      "Jesteśmy organizacją skupiającą w swoich szeregach pasjonatów, którzy poprzez wysoki poziom ambicji rozwijają się w różnorodnych kierunkach dając przewagę naszym Klientom oraz zapewniać konkurencyjność biznesu.",
  },
  {
    heading: "Doświadczenie",
    content:
      "Nasze różnorodne oraz bogate doświadczenie pozwala nam na realna ocenę sytuacji, a także analizę ",
  },
  {
    heading: "Relacje",
    content:
      "Każda współpracę traktujemy po partnersku, dlatego tak ważne jest dla nas budowanie długofalowych relacji, które pozwalają nam się rozwijać wraz z naszymi Klientami.",
  },
];
