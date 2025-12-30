import "./CreateFormular.css";
import { useState,useEffect } from "react";

import FormLabel from "../../components/formular/FormLabel";
import FormInput from "../../components/formular/FormInput";

function CreateFormular() {
  const [controlList, setControlList] = useState([]);
  const [selectedControl,setSelectedControl] = useState('');
 
  const controls = ["Input", "Checkbox", "Label"];

  const addControltoForm = () => {
    setControlList([...controlList,{type:selectedControl,name:'',value:'',option:[]}]);
  }

  useEffect (() => {
    console.log(controlList);
  },[controlList])


  return (
    <div className="main-formular-wrapper-flex">
      <form className="main-formular-header">

        <div className="formular-header-label formular-header-merge-2-cols">Nom du formulaire</div>
        <input
          type="text"
          className="formular-header-input formular-input formular-control formular-header-merge-2-cols"
        ></input>
        <div className="formular-header-label formular-header-merge-2-cols">Contrôle :</div>
        <select className="formular-header-input formular-control" name='controlSelect' value={selectedControl} onChange={(e) => setSelectedControl(e.target.value)}>
            <option key='unselected' selected>---Sélectionnez un contrôle---</option>
          {controls.map((item) => {
            return <option key={item} className='formular-control' value={item}>{item}</option>;
          })}
        </select>
        <button type='button' className='formular-header-button' onClick={()=> addControltoForm()}>Ajouter</button>
        </form>

        {controlList.map((item,key) => {
            if(item.type === 'Label'){
                return <FormLabel name={item.name} value={item.value} title='pouet'/>
            }
            else{
                return <div>caca</div>
            }
        })}
    </div>
  );
}

export default CreateFormular;
