import GroupCard from "../../components/groups/GroupCard";
import GroupModal from "../../components/groups/GroupModal";
import GroupEditForm from "../../components/groups/GroupEditForm";
import GroupDeleteMessage from "../../components/groups/GroupDeleteMessage";
import AddButton from '../../components/common/AddButton';

import { useGroup } from "../../hooks/useGroup";
import { useState, useEffect } from "react";
import { useEvent } from "../../hooks/useEvent";
import { useManager } from "../../contexts/ManagerContext";
import { Plus, RefreshCcw } from "lucide-react";

function ManageGroups() {
  const [groupList, setGroupList] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [filteredGroupList, setFilteredGroupList] = useState([]);
  const [selectedFilterGroup, setSelectedFilterGroup] = useState("");

  const { fetchEventGroups } = useEvent();
  const { eventName } = useManager();
  const { updateGroup, addGroup, deleteGroup } = useGroup();




  useEffect(() => {
  const fetchGroups = async () => {
    const eventid = localStorage.getItem("eventid");
    const response = await fetchEventGroups(eventid);
    setGroupList(response.data);
  };
  fetchGroups();
  },[isModalOpen]);

  useEffect(() => {
    if(selectedFilterGroup){
    const list = groupList.filter((group) => group.fk_parentgroupid === selectedFilterGroup);
    setFilteredGroupList(list);
    }
    else{
      setFilteredGroupList(groupList);
    }
      
    
   console.log("filtered group:",filteredGroupList);
  }, [groupList,selectedFilterGroup]);

  const handleCardClick = (item) => {
    setSelectedGroup(item);
    setModalType("edit");
    setIsModalOpen(true);
  };

  const handleAddGroupClick = () => {
    setModalType("add");
    setIsModalOpen(true);
  };

  const handleDeleteGroup = (item) => {
    setSelectedGroup(item);
    setModalType("del");
    setIsModalOpen(true);
  };

  const handleRefreshGroup = async () => {
    const eventid = localStorage.getItem("eventid");
    const response = await fetchEventGroups(eventid);
    setGroupList(response.data);
  }

  if (!eventName) return <div>sélectionner d'abord un évènement</div>;

  return (
    <div className="flex flex-col flex-1 h-full gap-4">
      <div className="flex flex-row justify-around">
        <AddButton handleButtonClick={handleAddGroupClick}/>
        <button onClick={handleRefreshGroup}>
          <RefreshCcw
            size={48}
            color={"green"}
            className={
              "hover:cursor-pointer hover:stroke-black hover:bg-emerald-800"
            }
          />
        </button>
        <select className='border-2 bg-zinc-200' onChange={(e) => setSelectedFilterGroup(e.target.value)}>
          <option value=''>Aucun filtre</option>
          {groupList.map((item,index)=> {
            return <option key={index} value={item.id}>{item.groupe}</option>
          })}
        </select>
      </div>

      <div className="flex flex-1 w-full flex-wrap gap-2 overflow-hidden items-start content-start p-2">
        {filteredGroupList
          .sort((a, b) => a.groupe.localeCompare(b.groupe))
          .map((item, index) => (
            <GroupCard
              key={index}
              groupName={item.groupe}
              parentGroup={item.parent}
              onClickEdit={() => handleCardClick(item)}
              onClickDelete={() => handleDeleteGroup(item)}
            />
          ))}
      </div>
      <GroupModal
        data={selectedGroup}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {modalType === "edit" && (
          <GroupEditForm
            initialData={selectedGroup}
            groupList={groupList}
            onCancel={() => setIsModalOpen(false)}
            onSubmit={updateGroup}
          />
        )}
        {modalType === "add" && (
          <GroupEditForm
            initialData={null}
            groupList={groupList}
            onCancel={() => setIsModalOpen(false)}
            onSubmit={addGroup}
          />
        )}
        {modalType === "del" && (
          <GroupDeleteMessage
            selectedGroup={selectedGroup}
            onCancel={() => setIsModalOpen(false)}
            onSubmit={deleteGroup}
          />
        )}
      </GroupModal>
    </div>
  );
}
export default ManageGroups;
