import CharacterBar from "./Character-Bar";
import Alert from "../ui/Alert";
import Cards from "../products/Card";

export default function Main({ arr }) {
  return (
    <>
      <div className="main bg-dark ">
        {/* CONTENITORE IMMAGINE -------------------------- */}
        <div className="container-liquid container-image-section">
          <div className="row"></div>
        </div>

        {/* MAIN TITOLO -------------------------- */}
        <div className="container bg-dark">
          <Cards />
        </div>

        {/* MAIN PARTE 2 ICONS -------------------------- */}
        <CharacterBar />
      </div>

      {/* ALERT -------------------------- */}
      <Alert title="Attenzione" color="bg-warning">
        <p>Si è verificato un Errore!</p>
      </Alert>
    </>
  );
}
