function ProjectCard(props) {
  return (
    <div className="col-sm m-2">
      <div className="card h-100 bg-secondary text-light">
        <div className="card-body">
          {/* IMAGE */}
          <img
            src={require("assets/images/projects/" + props.image)}
            className=" card-image-top img-thumbnail w-50 mb-2"
          />

          {/* TITLE */}
          <h5 className="card-title">{props.title}</h5>

          {/* DESCRIPTION */}
          <p className="card-text">{props.description}</p>
        </div>

        <div className="card-footer">
          <a className="text-light" href={props.link} target="_blank">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
