// STYLING
import "bootstrap/dist/css/bootstrap.css";

function ProjectCard(props) {
  return (
    <div className="col-sm m-2">
      <div className="card d-flex flex-column h-100">
        <div className="card-body">
          {props.image != null ?? (
            <img class="card-img-top" src={props.image} />
          )}
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>

        <div className="card-footer">
          <a className="" href={props.link} target="_blank">
            See more <i class="bi bi-box-arrow-up-right mx-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
