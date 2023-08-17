import { Link } from "react-router-dom";
import { Fade, Slide, Bounce } from "react-awesome-reveal";

// STYLINGS
import "./index.css";

// ASSETS
import Profile from "assets/images/profile.png";

function Home() {
  return (
    <Fade>
      <div className="d-flex container-fluid vh-100">
        <div className="row my-auto">
          {/* GREETING */}
          <div className="col-lg my-auto one-page portrait-center-display">
            <h1>
              Yo! My name is <br />
              <Slide>
                <span className="text-uppercase home-name-display">
                  William Oktavianus
                </span>
              </Slide>
            </h1>
            <hr />
            <h3>
              I'm a <span className="">junior programmer</span>
              &nbsp;who's embarking on his new journey.
            </h3>
            <br />

            <Link to="/contact">
              <Slide delay={250}>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg rounded-0"
                >
                  Contact Me
                </button>
              </Slide>
            </Link>
          </div>

          {/* PHOTO */}
          <div className="col-md my-auto text-center m-3">
            <Bounce>
              <img src={Profile} className="img-fluid" alt="Photo" />
            </Bounce>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Home;
