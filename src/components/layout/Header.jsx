import logo from "../../assets/img/dc-logo.png";

export default function Header() {
  //const logo = "../../assets/img/dc-logo.png";

  return (
    <header
      style={{
        backgroundColor: "red",
      }}
      className="bg-primary"
    >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="LogoDC"
              width="50px"
              height="50px"
              className="d-inline-block align-text-top"
            />
          </a>
          {/* MENU MOBILE-------------------------- */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              {/* MENU LIST -------------------------- */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Characters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Comics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Tv
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Collectibles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Fans
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
