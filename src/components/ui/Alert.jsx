export default function Alert({ title, color, children }) {
  //const arr = ["Ciao1", "Ciao2", "Ciao3"];

  //const arrComps = [];

  //for (let i = 0; i < arr.length; i++) {
  //  arrComps.push(<h1>{arr[i]}</h1>);
  //}

  //return arr.map((el, index) => <h1 key={index}>{el}</h1>);

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
