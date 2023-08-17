import { Fade, Slide } from "react-awesome-reveal";

// COMPONENTS
import PageHeader from "components/PageHeader";
import ProjectCard from "components/ProjectCard";

function Portfolio() {
  const projects = [
    // List Timer
    {
      title: "List Timer",
      description:
        "A timer app with list. Built as a cross-platform app for Android and iOS using Flutter.",
      link: "https://github.com/williamo1099/List-Timer",
      image: "list-timer.png",
    },
    // Metronome
    {
      title: "Metronome",
      description:
        "A simple metronome app. Built specifically for iOS using Swift and SwiftUI in MVVM architecture.",
      link: "https://github.com/williamo1099/Metronome",
      image: "metronome.png",
    },
    // Pac-Man
    {
      title: "Pac-Man",
      description:
        "A classic Pac-Man game built. Built using Java as a final project for Computer Graphics class.",
      link: "https://github.com/williamo1099/Pac-Man",
      image: "pac-man.png",
    },
    // Automated Document Clusterer
    {
      title: "Automated Document Clusterer",
      description:
        "A documents clusterer app. Built using Python and its machine learning library as a thesis project.",
      link: "https://github.com/williamo1099/Automated-Document-Clusterer",
      image: "automated-document-clusterer.png",
    },
  ];

  return (
    <Fade>
      <div className="container-fluid">
        <PageHeader
          title="Portfolio"
          subtitle="Some of my personal projects."
        />

        <Slide cascade={true}>
          {projects.map((project) => {
            return (
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            );
          })}
        </Slide>
      </div>
    </Fade>
  );
}

export default Portfolio;
