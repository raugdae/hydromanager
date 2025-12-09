import LabelledInput from "../common/LabelledInput";
import LabelledCheckbox from "../common/LabelledCheckbox";
import AllergensForm from "./allergens/AllergensForm";

function PersonHealthForm({
  
  isVegetarian = false,
  healthCondition ='',
  onAllergenUpdate,
  onChange,
  personAllergenList,
  setPersonAllergenList
}) {

  return (
    <div className="flex-1 h-full bg-zinc-400">
      <div className="grid grid-cols-1 grid-rows-[1fr_auto] gap-4">
        <div className="flex flex-col gap-4 w-full p-4">
          <div className="w-45">
            <LabelledCheckbox
              inputName="isvegetarian"
              labelText="Régime végétarien"
              onChange={onChange}
              inputValue={isVegetarian}
            />
          </div>
          <div className="w-full">
            <LabelledInput
              inputName="health_condition"
              labelText="Santé"
              onChange={onChange}
              inputValue={healthCondition}
            />
          </div>
        </div>
        <div className='border-t-2 p-4'>
            <div className='font-extrabold'>Allergies</div>
          <AllergensForm
            personAllergenUpdater={onAllergenUpdate}
            personAllergenList={personAllergenList}
            setPersonAllergenList={setPersonAllergenList}

          ></AllergensForm>
        </div>
      </div>
    </div>
  );
}
export default PersonHealthForm;
