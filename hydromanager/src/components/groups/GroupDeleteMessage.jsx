import DeleteButton from "../common/DeleteButton";
import CancelButton from "../common/CancelButton";

import { useState } from "react";

function GroupDeleteMessage({ selectedGroup, onSubmit, onCancel }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await onSubmit(selectedGroup);
      onCancel();
    } catch (error) {
      if (error.status === 403) {
        setErrorMessage(error.data.message);
      } else {
        console.log("uncatch error", error.message);
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 grid-rows-4 gap-4"
      >
        <div className="grid justify-end">
          <label>Nom du Groupe</label>
        </div>
        <div className="grid justify-start">{selectedGroup.groupe}</div>
        <div className="grid justify-end">
          <label>Groupe parent</label>
        </div>
        <div className="grid justify-start">{selectedGroup.parent}</div>
        <div className="grid justify-end">
          <CancelButton onClick={onCancel}>Retour</CancelButton>
        </div>
        <DeleteButton submit>Supprimer</DeleteButton>
        {errorMessage && (
          <div className="bg-red-600/80 col-span-2 flex items-center justify-center p-4">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
export default GroupDeleteMessage;
