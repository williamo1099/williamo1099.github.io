function PageHeader(props) {
  return (
    <div className="container-fluid">
      <div className="text-center mt-3">
        <h1 className="title-header">{props.title}</h1>
        <h4>{props.subtitle}</h4>
      </div>
      <hr className="border border-secondary border-2" />
    </div>
  );
}

export default PageHeader;
