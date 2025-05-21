import CharacterBar from "./Character-Bar";
import Alert from "./ui/Alert";

const title = "\u2192 Contenuto in Evidenza \u2190";

export default function Main() {
  return (
    <>
      <div className="main bg-dark">
        {/* MAIN TITOLO -------------------------- */}
        <div className="container bg-dark">
          <div className="row pt-5 pb-5">
            <div className="text-white">
              <h3>{title}</h3>
            </div>
          </div>
        </div>

        {/* MAIN PARTE 2 ICONS -------------------------- */}
        <CharacterBar />
      </div>

      {/* ALERT -------------------------- */}
      <Alert title="Errore" color="bg-danger">
        Si è verificato un Errore!
      </Alert>
    </>
  );
}
