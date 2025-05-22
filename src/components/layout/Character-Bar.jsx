import icon1 from "../../assets/img/buy-comics-digital-comics.png";

const items = [
  "Digital Comics",
  "DC Merchandise",
  "Subscription",
  "Comic Shop",
  "DC Power Visa",
];

export default function CharacterBar() {
  return (
    <>
      {/* CREAZIONE DELLE COLONNE CON UN MAP */}

      <div className="character-bar bg-primary ">
        <div className="container">
          <div className="row p-5 text-white ">
            {/* COLLONNA*/}
            {items.map((item, index) => {
              // Restituisce tutte le colonne per ogni item nell'array
              return (
                <div className="col" key={index}>
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src={icon1}
                        alt={`Icona ${index + 1}`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-9 text-start d-flex align-items-center text-uppercase">
                      {item}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
