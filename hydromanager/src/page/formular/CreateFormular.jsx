import "./CreateFormular.css";
import { useState, useEffect } from "react";

import FormLabel from "../../components/formular/FormLabel";
import FormInput from "../../components/formular/FormInput";
import FormCheckbox from "../../components/formular/FormCheckbox";
import FormMessageBox from "../../components/formular/FormMessageBox";

function CreateFormular() {
  const MSG_NO_CONTROL_SELECTED = "Aucun contrôle sélectionné";
  const MSG_MISSING_VALUE = "Donnée manquante dans le formulaire";
  const MSG_WARNING = "Attention";
  const MSG_ERROR = "Erreur";

  const MSG_STYLE_WARN = "infobox-warning";
  const MSG_STYLE_ERR = "infobox-error";

  const [controlList, setControlList] = useState([]);
  const [selectedControl, setSelectedControl] = useState("");
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageText, setMessageText] = useState({});
  const [formularTitle, setFormularTitle] = useState("");

  const controls = ["Input", "Checkbox", "Label"];

  
  useEffect(() => {
    console.log("ControlList:", controlList);
    setShowMessageBox(false);
    console.log("form title", formularTitle);
  }, [controlList]);


  const addControltoForm = () => {
    if (selectedControl != "" && selectedControl != "none") {
      setControlList([
        ...controlList,
        {
          type: selectedControl,
          id: controlList.length,
          title: "",
          value: "",
          options: [],
        },
      ]);
      setShowMessageBox(false);
    } else {
      setShowMessageBox(true);
      setMessageText({
        type: MSG_ERROR,
        message: MSG_NO_CONTROL_SELECTED,
        style: MSG_STYLE_ERR,
      });
    }
  };


  const handleItemEdit = (formItem) => {
    console.log("Form:",formItem);
    if (formItem.title === '' || formItem.value === '') {
      setShowMessageBox(true);
      setMessageText({
        type: MSG_WARNING,
        message: MSG_MISSING_VALUE,
        style: MSG_STYLE_WARN,
      });
    } else {
      setControlList(
        controlList.map((control) =>
          control.id === formItem.id
            ? { ...control, value: formItem.value, options: formItem.options,title:formItem.title }
            : control
        )
      );
      setShowMessageBox(false);
    }
  };

  return (
    <div className="main-formular-wrapper-flex">
      {showMessageBox && (
        <FormMessageBox
          messageStyle={messageText.style}
          messageType={messageText.type}
          messageText={messageText.message}
        />
      )}
      <form className="main-formular-header">
        <div className="formular-header-label">Nom du formulaire</div>
        <input
          type="text"
          className="formular-header-input formular-input formular-control"
          onChange={(e) => setFormularTitle(e.target.value)}
          value={formularTitle}
        ></input>
        <button className="formulare-header-input formular-header-merge-2-cols formular-header-button">
          Enregistrer le formulaire
        </button>

        <div className="formular-header-label">Contrôle :</div>
        <select
          className="formular-header-input formular-control"
          name="controlSelect"
          value={selectedControl}
          onChange={(e) => {
            setSelectedControl(e.target.value);
            setShowMessageBox(false);
          }}
        >
          <option key="unselected" value="none">
            ---Sélectionnez un contrôle---
          </option>
          {controls.map((item) => {
            return (
              <option key={item} className="formular-control" value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button
          type="button"
          className="formular-header-button"
          onClick={() => addControltoForm()}
        >
          Ajouter
        </button>
      </form>

      {controlList.map((item, key) => {
        switch (item.type) {
          case "Label":
            return (
              <FormLabel
                key={key}
                id={item.id}
                value={item.value}
                title={item.title}
              />
            );
            break;
          case "Checkbox":
            return (
              <FormCheckbox
                key={key}
                id={item.id}
                value={item.value}
                title={item.title}
                options={item.options}
                changeHandler={handleItemEdit}
              />
            );
            break;
          case "Input":
            return (
              <FormInput
                key={key}
                id={item.id}
                value={item.value}
                title={item.title}
                changeHandler={handleItemEdit}
              />
            );

          default:
            return;
        }
      })}
    </div>
  );
}

export default CreateFormular;
