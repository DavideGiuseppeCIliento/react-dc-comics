import CharacterBar from "./Character-Bar";

const title = "\u2192 Contenuto in Evidenza \u2190";

export default function Main() {
  return (
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
  );
}
