import { Link } from "react-router-dom";
import { Fade, Slide, Bounce } from "react-awesome-reveal";

// ASSETS
import Profile from "../../assets/images/profile.png";

function Home() {
  return (
    <Fade>
      <div className="d-flex container-fluid vh-100 one-page">
        <div className="row my-auto">
          {/* GREETING */}
          <div className="col-lg my-auto m-auto">
            <h1>
              Yo! My name is <br />
              <span className="text-primary">William Oktavianus</span>!
            </h1>
            <hr />
            <h3>
              I'm a <span className="text-primary">junior programmer</span>
              &nbsp;who's about to embark on a new journey.
            </h3>
            <br />

            <Link to="/contact">
              <Slide cascade={true}>
                <button type="button" className="btn btn-primary btn-lg">
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
