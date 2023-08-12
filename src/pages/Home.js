// STYLING
import "bootstrap/dist/css/bootstrap.css";

// ASSETS
import photo from "../assets/images/photo.png";

function Home() {
  return (
    <div className="container-fluid p-3">
      <div className="row">
        {/* GREETING */}
        <div className="col-sm my-auto">
          <h1>
            Yo! I'm <br />{" "}
            <span className="text-primary">William Oktavianus</span>!
          </h1>
          <h3>
            I'm a <span className="text-primary">junior programmer</span> who's
            about to embark on a new journey.
          </h3>
        </div>

        {/* PHOTO */}
        <div className="col-lg">
          <img src={photo} className="img-fluid" alt="Photo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
