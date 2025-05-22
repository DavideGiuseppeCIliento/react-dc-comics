import comics from "../../data/comics.js";

export default function Cards() {
  const cards = comics.map((card, i) => {
    return (
      <div className="col" key={i}>
        <div className="card text-white bg-transparent border-0">
          <img
            src={card.thumb}
            className="card-img-top image-fluid"
            alt="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{`${card.description.slice(
              0,
              50
            )} ...`}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container pt-5 pb-5">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 pt-5 pb-5">
        {cards}
      </div>
    </div>
  );
}
