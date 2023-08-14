function PageHeader(props) {
  return (
    <div className="container-fluid">
      <div className="text-center mt-3">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
      </div>
      <hr className="border border-primary border-2" />
    </div>
  );
}

export default PageHeader;
