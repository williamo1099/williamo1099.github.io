import { Fade, Slide } from "react-awesome-reveal";

// COMPONENTS
import PageHeader from "../../components/PageHeader";
import ProjectCard from "../../components/ProjectCard";

function Portfolio() {
  const projects = [
    // List Timer
    {
      title: "List Timer",
      description: "A timer app with list built using Flutter.",
      link: "https://github.com/williamo1099/List-Timer",
    },
    // Metronome
    {
      title: "Metronome",
      description: "A metronome app for iOS built using SwiftUI.",
      link: "https://github.com/williamo1099/Metronome",
    },
    // Pac-Man
    {
      title: "Pac-Man",
      description:
        "A classic Pac-Man game built using Java (as a final class project).",
      link: "https://github.com/williamo1099/Pac-Man",
    },
  ];

  return (
    <Fade>
      <div className="container-fluid one-page">
        <PageHeader title="Some of My Personal Projects" />

        <Slide>
          <div className="row p-3">
            {projects.map((project) => {
              return (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              );
            })}

            <div className="col-sm m-2 my-auto">
              <h2>And more is coming soon</h2>
            </div>
          </div>
        </Slide>
      </div>
    </Fade>
  );
}

export default Portfolio;
