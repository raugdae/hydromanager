import LabelledCheckbox from "../../common/LabelledCheckbox";

import { useAllergens } from "../../../hooks/useAllergens";
import { useState, useEffect } from "react";

function AllergensForm({ personAllergenList,setPersonAllergenList }) {
  
  const [allergenList, setAllergenList] = useState([]);

  const { getAllergens } = useAllergens();

  useEffect(() => {
    const fetchData = async () => {
      const list = await getAllergens();
      setAllergenList(list.data);
    };
    fetchData();
    
  }, []);

  const isPersonAllergen = (allergenId) => {
    if (personAllergenList.length > 0){
    return personAllergenList.some((item) => item.id === allergenId);
    }
  };

  const handleOnChange = (allergenid,isAllergen) => {
    
    if(isAllergen){
        
        setPersonAllergenList([...personAllergenList,{'id':allergenid,'value':''}])
    }
    else{
        setPersonAllergenList(personAllergenList.filter(item => item.id !== allergenid));
    }
    

    
    
  }

  return (
    <div className='grid grid-cols-2 grid-rows-7 w-full m-2'>
      {allergenList.map((item) => {
        return (
          <LabelledCheckbox
            inputName={item.id}
            labelText={item.value}
            inputValue={isPersonAllergen(item.id)}
            onChange={handleOnChange}
            
          />
        );
      })}
    </div>
  );
}
export default AllergensForm;
