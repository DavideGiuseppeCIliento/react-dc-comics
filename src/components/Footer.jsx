import facebook from "../assets/img/footer-facebook.png";
import periscope from "../assets/img/footer-periscope.png";
import pinterest from "../assets/img/footer-pinterest.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";

export default function Footer() {
  return (
    <div className="footer background-footer">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-4 ">
            <div className="row text-white">
              <div className="col-4">
                <h5>DC COMICS</h5>
                <ul className="list-unstyled text-color-footer ">
                  <li>
                    <small>DC</small>
                  </li>
                  <li>
                    <small>DCstore</small>
                  </li>
                  <li>
                    <small>Forever</small>
                  </li>
                  <li>
                    <small>Anco Marzio</small>
                  </li>
                  <li>
                    <small>Numa Pompilio</small>
                  </li>
                  <li>
                    <small>Prisco</small>
                  </li>
                </ul>
                <h5>DC</h5>
                <ul className="list-unstyled text-color-footer ">
                  <li>Shop</li>
                  <li>Shop DJ</li>
                </ul>
              </div>
              <div className="col-4">
                <h5>DC</h5>
                <ul className="list-unstyled text-color-footer ">
                  <li>
                    <small>Character</small>
                  </li>
                  <li>
                    <small>Comics</small>
                  </li>
                  <li>
                    <small>Movies</small>
                  </li>
                  <li>
                    <small>Tv</small>
                  </li>
                  <li>
                    <small>Games</small>
                  </li>
                  <li>
                    <small>Videos</small>
                  </li>
                  <li>
                    <small>News</small>
                  </li>
                  <li>
                    <small>Jobs</small>
                  </li>
                  <li>
                    <small>Subscri</small>
                  </li>
                  <li>
                    <small>Rating</small>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h5>SITES</h5>
                <ul className="list-unstyled text-color-footer ">
                  <li>
                    <small>Vitoantonio</small>
                  </li>
                  <li>
                    <small>Michelangelo</small>
                  </li>
                  <li>
                    <small>Universe</small>
                  </li>
                  <li>
                    <small>heart</small>
                  </li>
                  <li>
                    <small>Cassano</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-bar">
        <div className="container pt-3 pb-3">
          <div className="row ">
            <div className="col">
              <button type="button" className="btn btn-outline-light">
                SIGN-UP NOW!
              </button>
            </div>
            {/* FOLLOW US */}
            <div className="col d-flex justify-content-end align-items-center gap-3">
              <strong className="text-white">
                <small>FOLLOW US:</small>
              </strong>
              <img src={facebook} alt="Facebook" width="25" height="25" />
              <img src={periscope} alt="Periscope" width="25" height="25" />
              <img src={pinterest} alt="Pinterest" width="25" height="25" />
              <img src={twitter} alt="Twitter" width="25" height="25" />
              <img src={youtube} alt="YouTube" width="25" height="25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
