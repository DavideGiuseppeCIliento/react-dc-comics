import comics from "../../data/comics.js";
import Card from "../products/Card.jsx";

export default function GridCardsSection() {
  const cards = comics.map((card, i) => {
    return (
      <div className="col" key={i}>
        <Card card={card} />
      </div>
    );
  });

  return cards;
}
