// STYLINGS
import "./index.css";

function ProjectCard(props) {
  return (
    <div class="card bg-secondary text-light rounded-0 m-3 p-2">
      <img
        src={require("assets/images/projects/" + props.image)}
        class="card-img-top img-fluid rounded-0"
      />

      <div class="card-body">
        <h5 class="card-title fw-bold">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href={props.link} target="_blank" class="btn btn-primary rounded-0">
          See more
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
