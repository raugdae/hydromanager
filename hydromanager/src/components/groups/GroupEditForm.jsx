import ConfirmButton from "../common/ConfirmButton";
import CancelButton from "../common/CancelButton";

import { useState,useEffect } from "react";

function GroupEditForm({ initialData, groupList, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(initialData);
  const [parentAvailable,setParentAvailable] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onCancel();
  };

  useEffect(() => {

    if (initialData){
    const available = groupList.filter((item) => {
      if (item.id === initialData.id) return false;
      if (isChildOf(initialData.id, item.id)) return false;
      return true;
    });
    setParentAvailable(available);
    }
    else {
      setParentAvailable(groupList);
    }

  }, [groupList, initialData,formData]);

  const setParentGroup = (e) =>{
    
    if(e.target.value === ''){
        setFormData({...formData,fk_parentgroupid:null})
    }else{
        setFormData({...formData,fk_parentgroupid:e.target.value})
    }
  }

    const isChildOf = (parentId, childId) => {
    
    for (const item of groupList) {
      if (item.fk_parentgroupid === parentId) {
        if (item.id === childId) return true;
    
        if (isChildOf(item.id, childId)) return true;
      }
    }
    return false;
  };
  

  

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 grid-rows-3 gap-4"
      >
        <div className="grid justify-end">
          <label>Nom du Groupe</label>
        </div>
        <div className="grid justify-start">
          <input
            className="bg-zinc-100"
            type="text"
            value={formData?formData.groupe:''}
            onChange={(e) =>
              setFormData({ ...formData, groupe: e.target.value })
            }
          />
        </div>
        <div className="grid justify-end">
          <label>Groupe parent</label>
        </div>
        <div className="grid justify-start">
          <select className=" bg-zinc-100" onChange={(e) => setParentGroup(e)} value={formData?formData.fk_parentgroupid:'xx'}>
            <option key='xx' value=''>aucun</option>
            {parentAvailable.map((item) => {
               
              return (
                
                  <option key={item.id} value={item.id}>
                    {item.groupe}
                  </option>
                
              );
            })}
          </select>
        </div>
        <div className="grid justify-end">
          <CancelButton onClick={onCancel}>Retour</CancelButton>
        </div>
        <ConfirmButton submit></ConfirmButton>
      </form>
    </div>
  );
}
export default GroupEditForm;
