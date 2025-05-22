import CharacterBar from "./Character-Bar";
import Alert from "../ui/Alert";
import GridCards from "./gridCards.jsx";
import comics from "../../data/comics.js";

export default function Main({ arr }) {
  return (
    <>
      <div className="main bg-dark">
        {/* MAIN TITOLO -------------------------- */}
        <div className="container bg-dark">
          <div className="row pt-5 pb-5">
            <div className="text-white">
              <GridCards />
            </div>
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
