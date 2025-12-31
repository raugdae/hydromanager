
import "./FormStyle.css";
import {useState} from 'react';

function FormLabel({ title, value, id,changeHandler}) {

  const [itemTitle,setItemTitle] = useState(title);
  const [itemValue,setItemValue] = useState(value);

  return (
    <div className="form-item-wrapper">
        <label>Titre : </label>
        <input type='text' className='form-item-input' value={itemTitle} onChange={(e) => setItemTitle(e.target.value)}/>
        <label>Description :</label>
        <input type='text' className='form-item-input' value={itemValue} onChange={(e) => setItemValue(e.target.value)}/>
        <button type='button' className='form-item-button form-item-element'>Enregistrer</button>
    </div>
  );
}

export default FormLabel;
