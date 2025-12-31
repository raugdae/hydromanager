import "./FormStyle.css";
import { useState } from "react";

function FormInput({ title, value, id, changeHandler }) {
  const [itemTitle, setItemTitle] = useState(title);
  const [itemValue, setItemValue] = useState(value);

  const updateItem = () => {
    const updatedItem = {id:id,title:itemTitle,value:itemValue};
    console.log(updatedItem);
    changeHandler(updatedItem);
  }

  return (
    <div className="form-item-wrapper">
      <h1 className="form-item-title">Titre</h1>
      <input
        type="text"
        className="form-item-input"
        name={name}
        value={itemTitle}
        onChange={(e) => setItemTitle(e.target.value)}
      />
      <h1 className="form-item-title">Description</h1>
      <input
        type="text"
        className="form-item-input"
        name={name}
        value={itemValue}
        onChange={(e) => setItemValue(e.target.value)}
      />
      <div className="form-item-element">
        <button type="button" className="form-item-button" onClick={() => updateItem()}>
          Enregistrer
        </button>
      </div>
    </div>
  );
}
export default FormInput;
