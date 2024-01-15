import React from "react";

export default function Try() {
  return (
    <div className="pb-20">
      <h4 className="text-graphit text-lg">TO SPRÓBUJ:</h4>
      <div className="space-y-12">
        {list.map(({ title, content, i }) => {
          return (
            <div key={i} className="space-y-4">
              <h3 className="text-3xl">{title}</h3>
              <p className="text-secondary text-xl">{content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const list = [
  {
    title: "Wybierz dla siebie wygodną formę kontaktu",
    content:
      "Dla Twojej wygody ustawiliśmy dwa sposoby rozpoczęcia rozmów poprzez formularz internetowy lub spotkanie online.",
  },
  {
    title: "Wstępna ocena sytuacji",
    content:
      "30 minutowe spotkanie pozwala nam na analizę Twojej sytuacji i przedstawienie dostępnych możliwości,",
  },
  {
    title: "Analiza",
    content:
      "Po spotkaniu otrzymasz analizę Twojej sytuacji wraz z najważniejszymi ustaleniami oraz wstępną ofertą. ",
  },
  {
    title: "Omówienie oferty",
    content:
      "Dopasowanie się do potrzeb biznesowych, a także realna ocena sytuacji wymaga od nas analizy, dlatego ofertę wraz z najważniejszym czynnikami współpracy omawiamy na kolejnym spotkaniu. ",
  },
  {
    title: "Harmonogram pracy",
    content:
      " Względem Twoich oczekiwań oraz ustaleń opracujemy harmonogram pracy. ",
  },
  {
    title: "Raportowanie",
    content:
      "Raz w tygodniu otrzymujesz od nas pełen raport na temat przeprowadzonych działań, abyś mógł kontrolować cały proces. ",
  },
  {
    title: "Weryfikacja/Testowanie",
    content:
      "Jeśli projekt jest gotowy i spełnia wszystkie porządne funkcjonalności przystępujemy do testowania, aby zwiększyć zadowolenie Klienta końcowego. ",
  },
  {
    title: "Partnerstwo",
    content:
      "Każda współpracę traktujemy po partnersku, dlatego wraz z Tobą ustalamy formę wsparcia, a także cykliczne spotkania raz na kwartał, aby weryfikować nowe możliwości produktów/usług oraz poprawiać jakość.",
  },
];
