import "./FormStyle.css";

function FormLabel({ title, value, name }) {
  return (
    <div className="form-item-wrapper">
      <h1 className="form-item-title">
        {title}
      </h1>
      <label className="form-item-element" name={name}>
        {value}
      </label>
    </div>
  );
}

export default FormLabel;
