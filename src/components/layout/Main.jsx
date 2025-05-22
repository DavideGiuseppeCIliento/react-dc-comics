import CharacterBar from "./Character-Bar";
import Alert from "../ui/Alert";
import Cards from "../products/Card";
import TitlePage from "../elements/TitlePage";
import Button from "../elements/Button";

export default function Main({ arr }) {
  return (
    <>
      <div className="main bg-dark ">
        {/* CONTENITORE IMMAGINE -------------------------- */}
        <div className="container-liquid container-image-section">
          <div className="row">
            {/* TITOLO -------------------------- */}
            <TitlePage title="Current Series" />
          </div>
        </div>

        {/* MAIN TITOLO -------------------------- */}
        <div className="container pt-5 pb-5">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 pt-5 pb-5">
            <Cards />
          </div>
        </div>

        {/* LOAD MORE SECTION -------------------------- */}
        <div className="container ">
          <div className="row pb-5 d-flex justify-content-center">
            <Button text="Load More" />
          </div>
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
