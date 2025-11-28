import GroupCard from "../../components/groups/GroupCard";
import GroupModal from "../../components/groups/GroupModal";
import GroupEditForm from '../../components/groups/GroupEditForm';
import GroupDeleteMessage from "../../components/groups/GroupDeleteMessage";

import {useGroup} from '../../hooks/useGroup';
import { useState, useEffect } from "react";
import { useEvent } from "../../hooks/useEvent";
import { useManager } from "../../contexts/ManagerContext";
import {Plus,RefreshCcw} from 'lucide-react';

function ManageGroups() {
  const [groupList, setGroupList] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType,setModalType] = useState('');

  const { fetchEventGroups } = useEvent();
  const { eventName } = useManager();
  const { updateGroup,addGroup,deleteGroup} = useGroup();

  const fetchGroups = async () => {
      const eventid = localStorage.getItem("eventid");
      const response = await fetchEventGroups(eventid);
      setGroupList(response.data);
    };

  useEffect(() => {
    fetchGroups();
  },[isModalOpen]);

  const handleCardClick = (item) => {
    setSelectedGroup(item);
    setModalType('edit');
    setIsModalOpen(true);
  };

  const handleAddGroupClick = () => {
    setModalType('add');
    setIsModalOpen(true);
  }

  const handleDeleteGroup = (item) => {
    setSelectedGroup(item);
    setModalType('del');
    setIsModalOpen(true);
  }

  if (!eventName) return <div>sélectionner d'abord un évènement</div>;

  return (
    <div className="flex flex-col flex-1 h-full gap-4">
      <div className="flex flex-row justify-around">
        <button onClick={handleAddGroupClick} ><Plus size={48} color={"green"} className={'hover:cursor-pointer hover:stroke-black hover:bg-emerald-800'}/></button>
        <button onClick={fetchGroups}><RefreshCcw size={48} color={'green'} className={'hover:cursor-pointer hover:stroke-black hover:bg-emerald-800'}/></button>
      </div>
      
      <div className="flex flex-1 w-full flex-wrap gap-2 overflow-hidden items-start content-start">
        {groupList.sort((a, b) => a.groupe.localeCompare(b.groupe)).map((item,index) => (
          <GroupCard
            groupName={item.groupe}
            parentGroup={item.parent}
            onClickEdit={() => handleCardClick(item)}
            onClickDelete={() => handleDeleteGroup(item)}
          />
          
        ))}
      </div>
      <GroupModal data={selectedGroup} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalType=== 'edit'&& <GroupEditForm initialData={selectedGroup} groupList={groupList} onCancel={() => setIsModalOpen(false)} onSubmit={updateGroup}/>}
        {modalType==='add' && <GroupEditForm initialData={null} groupList={groupList} onCancel={() => setIsModalOpen(false)} onSubmit={addGroup}/>}
          {modalType==='del' && <GroupDeleteMessage selectedGroup={selectedGroup} onCancel={()=> setIsModalOpen(false)} onSubmit={deleteGroup}/>}
      </GroupModal>
    </div>
  );
}
export default ManageGroups;
