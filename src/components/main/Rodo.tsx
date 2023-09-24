

const Rodo = () => {
  return (
    <div className="container px-4 mx-auto my-10 grid gap-2">
      <p className="text-xs text-muted-foreground select-all">
        {`EN: I consent to the processing of my personal data as part of the
        recruitment process for the position I have applied for. I consent to
        the processing of my personal data contained in this application for the
        purpose of future recruitment by the company to which I have applied.`}
      </p>
      <a
        href="https://nofluffjobs.com/pl/log/praca-w-it/cv/klauzula-cv-2023-aktualna-wersja-niezbedna-przy-rekrutacjach/#:~:text=jest%20gotowa%20formu%C5%82a.-,Wyra%C5%BCam%20zgod%C4%99%20na%20przetwarzanie%20moich%20danych%20osobowych%20dla%20potrzeb%20niezb%C4%99dnych%20do,swobodnego%20przep%C5%82ywu%20takich%20danych%20oraz%20uchylenia%20dyrektywy%2095/46/WE%20(RODO)).,-Mo%C5%BCliwa%20jest%20r%C3%B3wnie%C5%BC"
        target="_blank"
      >
        <p className="text-xs text-muted-foreground select-all">
          {`PL: Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
        niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10
        maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000)
        oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
        2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
        związku z przetwarzaniem danych osobowych i w sprawie swobodnego
        przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).`}
        </p>
      </a>
    </div>
  );
}

export default Rodo
