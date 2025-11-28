import ConfirmButton from "../common/ConfirmButton";
import CancelButton from "../common/CancelButton";

import { useState, useEffect } from "react";

function GroupDeleteMessage({ selectedGroup, onSubmit, onCancel }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await onSubmit(selectedGroup);
      console.log('groupe supprimé')
      onCancel();
    } catch (error) {
      if (error.response?.status === 403) {
        console.log(error.response.data.message);
      }
      console.log(error, error.message);
    }
  };

  useEffect(() => {
    console.log(selectedGroup);
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 grid-rows-3 gap-4"
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
        <ConfirmButton submit></ConfirmButton>
      </form>
    </div>
  );
}
export default GroupDeleteMessage;
