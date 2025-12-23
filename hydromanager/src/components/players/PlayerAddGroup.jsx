import CancelButton from "../common/CancelButton";
import ConfirmButton from "../common/ConfirmButton";

import { useGroup } from "../../hooks/useGroup";
import { useAttendee } from "../../hooks/useAttendee";
import { useState, useEffect } from "react";

function PlayerAddGroup({ attendeeid, onCancel }) {
  const [groupList, setGroupList] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState('');

  const { getEventGroups } = useGroup();
  const { addPlayerGroup } = useGroup();

  useEffect(() => {
    const fetchGroupList = async () => {
      const response = await getEventGroups();
      setGroupList(
        response.data.sort((a, b) => a.groupe.localeCompare(b.groupe))
      );
    };
    fetchGroupList();
  }, []);

  const handleConfirmAdd = async () => {
    setIsSaving(true);
    console.log("attendee:", attendeeid, "group:", selectedGroup);
    await addPlayerGroup(attendeeid, selectedGroup);
    setIsSaving(false);
    onCancel();
  };

  return (
    <div className="absolute inset-0 z-10 grid grid-cols-4 bg-zinc-200 flex-1 justify-items-center">
      <div className="col-span-2 col-start-2 text-2xl font-bold">
        Sélectionnez un groupe
      </div>
      <div className="col-start-2 row-start-2 col-span-2">
        <select className="border-2 border-black bg-white" onChange={(e) => setSelectedGroup(e.target.value)}>
          <option default>---</option>
          {groupList.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.groupe}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-start-2 row-start-3">
        <CancelButton onClick={onCancel}>Annuler</CancelButton>
      </div>
      <div className="col-start-3 row-start-3">
        <ConfirmButton disabled={isSaving} onClick={() => handleConfirmAdd()}>
          {isSaving ? "Envoi en cours..." : "Confirmer"}
        </ConfirmButton>
      </div>
    </div>
  );
}

export default PlayerAddGroup;
