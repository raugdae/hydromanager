import GroupCard from "../../components/groups/GroupCard";
import GroupModal from "../../components/groups/GroupModal";
import GroupEditForm from '../../components/groups/GroupEditForm';

import {useGroup} from '../../hooks/useGroup';
import { useState, useEffect } from "react";
import { useEvent } from "../../hooks/useEvent";
import { useManager } from "../../contexts/ManagerContext";

function ManageGroups() {
  const [groupList, setGroupList] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { fetchEventGroups } = useEvent();
  const { eventName } = useManager();
  const { updateGroup} = useGroup();

  const fetchGroups = async () => {
      const eventid = localStorage.getItem("eventid");
      const response = await fetchEventGroups(eventid);
      setGroupList(response.data);
    };

  useEffect(() => {
    console.log('refreshed!')
    fetchGroups();
  },[]);

  const handleCardClick = (item) => {
    setSelectedGroup(item);
    setIsModalOpen(true);
  };

  if (!eventName) return <div>sélectionner d'abord un évènement</div>;

  return (
    <div className="flex flex-col flex-1 h-full gap-4">
      <div className="flex flex-row justify-center">
        placeholder Button Add Group
      </div>
      <button className='hover:bg-black hover:cursor-pointer hover:text-white' onClick={fetchGroups}>refresh</button>
      <div className="flex flex-1 w-full flex-wrap gap-2 border border-red-900 justify-items-center">
        {groupList.map((item) => (
          <GroupCard
            groupName={item.groupe}
            parentGroup={item.parent}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>
      <GroupModal data={selectedGroup} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <GroupEditForm initialData={selectedGroup} groupList={groupList} onCancel={() => setIsModalOpen(false)} onSubmit={updateGroup}/>
      </GroupModal>
    </div>
  );
}
export default ManageGroups;
