import ConfirmButton from "../common/ConfirmButton";
import CancelButton from "../common/CancelButton";

import { useState,useEffect } from "react";

function GroupEditForm({ initialData, groupList, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(initialData);
  const [parentAvailable,setParentAvailable] = useState(groupList);


    useEffect(() => {
        console.log('enter useEffect');
        parentRecursiveCheck(initialData);
        console.log(parentAvailable);

    },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onCancel();
  };

  const setParentGroup = (e) =>{
    
    if(e.target.value === ''){
        setFormData({...formData,fk_parentgroupid:null})
    }else{
        setFormData({...formData,fk_parentgroupid:e.target.value})
    }

    console.log("formdata:",formData);
  }

  const parentRecursiveCheck = (initialData) => {
    console.log('enter recursive function');
    
    if (!initialData.fk_parentgroupid) return true;

    parentAvailable.map((item) => {
        if (item.fk_parentgroupid === initialData.fk_parentgroupid){
            setParentAvailable({...parentAvailable,isNotExiste:false})
            parentRecursiveCheck(item);
            console.log("found recursion")
            return;
        }
        else
        {
            setParentAvailable({...parentAvailable,isNotExist:true})
            console.log('no match found');
            return;
        }
    })


  }

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
            value={formData.groupe}
            onChange={(e) =>
              setFormData({ ...formData, groupe: e.target.value })
            }
          />
        </div>
        <div className="grid justify-end">
          <label>Groupe parent</label>
        </div>
        <div className="grid justify-start">
          <select className=" bg-zinc-100" onChange={(e) => setParentGroup(e)}>
            <option key='xx' value=''>aucun</option>
            {groupList.map((item) => {
               
              return (
                item.groupe !== formData.groupe && parentRecursiveCheck(groupList,item) && (
                  <option key={item.id} value={item.id}>
                    {item.groupe}
                  </option>
                )
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
