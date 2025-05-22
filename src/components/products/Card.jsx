export default function Card({ card }) {
  return (
    <div className="card text-white bg-transparent border-0">
      <img
        src={card.thumb}
        className="card-img-top image-fluid"
        alt="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{`${card.description.slice(0, 50)} ...`}</p>
      </div>
    </div>
  );
}
