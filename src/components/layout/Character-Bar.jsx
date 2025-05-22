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
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 p-5 text-white ">
            {/* COLLONNA*/}
            {items.map((item, index) => {
              // Restituisce tutte le colonne per ogni item nell'array
              return (
                <div className="col p-5 p-sm-2" key={index}>
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-center">
                      <img
                        src={icon1}
                        alt={`Icona ${index + 1}`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-9 d-flex align-items-center justify-content-center justify-content-md-start text-uppercase text-center text-md-start">
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
