export default function Alert(props, children) {
  const { title, color } = props;

  return (
    <div className="container-fluid">
      <div className={`row ${color}`}>
        <div className="col text-center">{title}</div>
      </div>
    </div>
  );
}
