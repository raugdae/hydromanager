import GroupCard from "../../components/groups/GroupCard";
import GroupModal from "../../components/groups/GroupModal";
import { useState, useEffect } from "react";
import { useEvent } from "../../hooks/useEvent";
import { useManager } from "../../contexts/ManagerContext";

function ManageGroups() {
  const [groupList, setGroupList] = useState([]);
  const { fetchEventGroups } = useEvent();
  const { eventName } = useManager();

  useEffect(() => {
    const fetchGroups = async () => {
      const eventid = localStorage.getItem("eventid");
      const response = await fetchEventGroups(eventid);
      console.log(response.data);

      setGroupList(response.data);
    };

    fetchGroups();
  }, []);

  if (!eventName) return <div>sélectionner d'abord un évènement</div>;

  return (
    
      <div className="flex flex-col flex-1 h-full gap-4">
        <div className="flex flex-row justify-center">
          placeholder Button Add Group
        </div>
        <div className="flex flex-1 w-full flex-wrap gap-2 border border-red-900 justify-items-center">
          {groupList.map((item) => (
            <>
              {console.log(item)}
              <GroupCard groupName={item.groupe} parentGroup={item.parent} />
            </>
          ))}
        </div>
      </div>
    
  );
}
export default ManageGroups;
