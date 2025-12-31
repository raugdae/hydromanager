import "./FormStyle.css";
import { useState, useEffect } from "react";

function FormCheckbox({ title, value, id, options = [], changeHandler }) {
  const [itemTitle, setItemTitle] = useState(title);
  const [itemValue, setItemValue] = useState(value);
  const [itemName, setItemName] = useState(id);
  const [optionName, setOptionName] = useState("");
  const [itemOptions, setItemOptions] = useState(options);
  const [currentItemOption, setCurrentItemOption] = useState(0);

  const handleAddCheckBox = () => {
    setItemOptions([
      ...itemOptions,
      { id: currentItemOption, label: optionName, value: false },
    ]);
    setCurrentItemOption(currentItemOption + 1);
  };

  
  const updateItem = () => {
    
    const updatedItem ={id:itemName,value:itemValue,title:itemTitle,options:itemOptions};
    changeHandler(updatedItem);
  }
  

  return (
    <div className="form-item-wrapper">
      <div className="form-item-element">
        <label className="form-item-title">Titre :</label>
        <input
          className="form-item-input"
          onChange={(e) => setItemTitle(e.target.value)}
          value={itemTitle}
        />
      </div>
      <div className="form-item-element">
        <label className="form-item-title">Description :</label>
        <input
          className="form-item-input"
          onChange={(e) => setItemValue(e.target.value)}
          value={itemValue}
        />
      </div>
      <div className="form-item-element">
        <label>Valeur :</label>
        <input
          type="text"
          id="boxValue"
          className="form-item-input"
          onChange={(e) => setOptionName(e.target.value)}
        ></input>
        <button
          type="button"
          className="form-item-button"
          onClick={() => {
            handleAddCheckBox();
          }}
        >
          Ajouter
        </button>
      </div>
      <div>
        <button type='button' onClick={() => updateItem()}>save</button>
      </div>

      <div className="form-item-flex-row">
        {itemOptions.map((item, key) => {
          return (
            <div key={key} className="form-item-checkbox-wrapper">
              <label className="form-item-title">{item.label}</label>
              <input
                type="checkbox"
                id={item.id}
                value={item.value}
                onChange={changeHandler}
              />
              <button
                type="button"
                className="form-item-button"
                onClick={(e) => {
                  setItemOptions(
                    itemOptions.filter((option) => option.id !== item.id)
                  ),
                    console.log(e.target.id);
                }}
              >
                Supprimer
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FormCheckbox;
