import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

// STYLING
import "bootstrap/dist/css/bootstrap.css";

// ASSETS
import photo from "../assets/images/photo.png";

function Home() {
  return (
    <Fade>
      <div className="container-fluid p-3">
        <div className="row">
          {/* GREETING */}
          <div className="col-sm my-auto m-3">
            <h1>
              Yo! My name is <br />{" "}
              <span className="text-primary">William Oktavianus</span>!
            </h1>
            <hr />
            <h3>
              I'm a <span className="text-primary">junior programmer</span>{" "}
              who's about to embark on a new journey.
            </h3>
            <br />

            <Link to="/contact">
              <button type="button" className="btn btn-primary">
                Contact Me
              </button>
            </Link>
          </div>

          {/* PHOTO */}
          <div className="col-lg m-3">
            <img src={photo} className="img-fluid" alt="Photo" />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Home;
