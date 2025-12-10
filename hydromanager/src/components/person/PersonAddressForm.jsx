import LabelledInput from "../common/LabelledInput";

function PersonAddressForm({ streetName ='', streetNumber='', zip ='', city ='', onChange }) {
  return (
    <div className="flex flex-1 bg-zinc-400 overflow-hidden items-start justify-center w-full">
      <div className="grid grid-cols-1 gap-4 ">
        <div className="flex flex-row gap-4 w-full  ">
          <div className="w-80">
            <LabelledInput inputName='street_name' labelText="Rue" onChange={onChange} inputValue={streetName} />
          </div>
          <div className="w-10">
            <LabelledInput inputName= 'street_number' labelText="No" onChange={onChange} inputValue={streetNumber}/>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="w-14">
            <LabelledInput inputName='zip' labelText="NPA" onChange={onChange} inputValue={zip}/>
          </div>
          <div className="w-76">
            <LabelledInput inputName='city' labelText="Localité" onChange={onChange} inputValue={city}/>
          </div>
        </div>
      </div>
      </div>
    
  );
}
export default PersonAddressForm;
