import { Fade } from "react-awesome-reveal";

// STYLING
import "bootstrap/dist/css/bootstrap.css";

function Portfolio() {
  return (
    <Fade>
      <div className="container-fluid mt-3">
        <div className="text-center">
          <h1>Some of My Personal Projects</h1>
        </div>
        <hr />

        {/* LIST TIMER */}
        <div className="row p-3">
          <div className="col card mx-3">
            <div className="card-body">
              <h5 className="card-title">List Timer</h5>
              <p className="card-text">
                A timer with list app for Android and iOS built using Flutter.
              </p>
              <a href="#" className="btn btn-primary">
                See more about project
              </a>
            </div>
          </div>

          {/* METRONOME */}
          <div className="col card mx-3">
            <div className="card-body">
              <h5 className="card-title">Metronome</h5>
              <p className="card-text">
                A metronome app for iOS built using SwiftUI.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          {/* MORE */}
          <div className="col my-auto">
            <h1>And more is coming soon...</h1>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Portfolio;
