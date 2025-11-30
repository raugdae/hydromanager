import LabelledInput from "../common/LabelledInput";

function PersonICEForm({
  iceContactDescription ='',
  iceContactName ='',
  iceContactNumber ='',
  onChange,
}) {
  return (
    <div className="h-full bg-zinc-400 overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
        
          <div>
            <LabelledInput
              inputName="emergency_contact_name"
              labelText="Nom du contact d'urgence"
              inputValue={iceContactName}
              onChange={onChange}
            />
          </div>
          <div>
            <LabelledInput
              inputName="emergency_contact_number"
              labelText="Numéro du contact"
              inputValue={iceContactNumber}
              onChange={onChange}
            />
          </div>
          <div className='col-span-2'>
            <LabelledInput
              inputName="emergency_contact_description"
              labelText="Information du contact"
              inputValue={iceContactDescription}
              onChange={onChange}
            />
        
        </div>
      </div>
    </div>
  );
}
export default PersonICEForm;
