import { Fade, Slide } from "react-awesome-reveal";

// STYLING
import "bootstrap/dist/css/bootstrap.css";

// COMPONENTS
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  return (
    <Fade>
      <div className="container-fluid one-page">
        <PageHeader title="Some of My Personal Projects" />

        <Slide>
          <div className="row overflow-auto p-3">
            {/* LIST TIMER */}
            <ProjectCard
              title="List Timer"
              description="A timer app with list built using Flutter."
              link="https://github.com/williamo1099/List-Timer"
            />

            {/* METRONOME */}
            <ProjectCard
              title="Metronome"
              description="A metronome app for iOS built using SwiftUI."
              link="https://github.com/williamo1099/Metronome"
            />

            {/* PACMAN */}
            <ProjectCard
              title="Pac-Man"
              description="A classic Pac-Man game built using Java (as a final class project)."
              link="https://github.com/williamo1099/Metronome"
            />

            {/* MORE */}
            <div className="col my-auto">
              <h1>And more is coming soon...</h1>
            </div>
          </div>
        </Slide>
      </div>
    </Fade>
  );
}

export default Portfolio;
