export default function Alert({ title, color, children }) {
  return (
    <div className="container-fluid ">
      <div className={`row ${color || "bg-danger"} pt-3 pb-3`}>
        <div className="col text-center">
          <h2>{title || "Errore"}</h2>
          <h4>{children || "Si è verificato un errore"}</h4>
        </div>
      </div>
    </div>
  );
}
