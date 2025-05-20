import icon1 from "../assets/img/buy-comics-digital-comics.png";

export default function CharacterBar() {
  return (
    <>
      <div className="character-bar bg-primary ">
        <div className="container">
          <div className="row p-5 text-white ">
            {/* COL 1*/}
            <div className="col">
              <div className="row">
                <div className="col-md-3">
                  <img src={icon1} alt="Icona 1" className="img-fluid" />
                </div>
                <div className="col-md-9 text-start d-flex align-items-center text-uppercase">
                  Digital Comics
                </div>
              </div>
            </div>

            {/* COL 2*/}
            <div className="col">
              <div className="row">
                <div className="col-md-3">
                  <img src={icon1} alt="Icona 1" className="img-fluid" />
                </div>
                <div className="col-md-9 text-start d-flex align-items-center text-uppercase">
                  DC Merchndise
                </div>
              </div>
            </div>

            {/* COL 3*/}
            <div className="col">
              <div className="row">
                <div className="col-md-3">
                  <img src={icon1} alt="Icona 1" className="img-fluid" />
                </div>
                <div className="col-md-9 text-start d-flex align-items-center text-uppercase">
                  Subscription
                </div>
              </div>
            </div>

            {/* COL 4*/}
            <div className="col">
              <div className="row">
                <div className="col-md-3">
                  <img src={icon1} alt="Icona 1" className="img-fluid" />
                </div>
                <div className="col-md-9 text-start d-flex align-items-center text-uppercase">
                  Comic Shop
                </div>
              </div>
            </div>

            {/* COL 5*/}
            <div className="col">
              <div className="row">
                <div className="col-md-3">
                  <img src={icon1} alt="Icona 1" className="img-fluid" />
                </div>
                <div className="col-md-9 text-start d-flex align-items-center text-uppercase">
                  DC Power Visa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
