import { useState, useEffect } from "react";

import TabItem from "../common/TabItem.jsx";
import TabMenu from "../common/TabMenu.jsx";
import PersonAddressForm from "./PersonAddressForm.jsx";
import PersonHealthForm from "./PersonHealthForm.jsx";
import PersonICEForm from "./PersonICEForm.jsx";
import ConfirmButton from "../common/ConfirmButton.jsx";
import CancelButton from "../common/CancelButton.jsx";

function PersonAddForm({ onSubmit, onCancel }) {
  const [personDetail, setPersonDetail] = useState({
    firstName: "",
    lastName: "",
    street_name: "",
    street_number: "",
    zip: "",
    city: "",
    isvegetarian: false,
    health_condition: "",
    emergency_contact_description: "",
    emergency_contact_name: "",
    emergency_contact_number: "",
    email:"",
    birthday:""
  });
  const [activeTab, setActiveTab] = useState("address");
  const [personAllergens, setPersonAllergens] = useState([]);

  useEffect ( () => {
    console.log(personDetail)
  },[personDetail])

  const handleTabSelect = (tabName) => {
    setActiveTab(tabName);
  };

  const handleEditFormular = (field, value) => {
    setPersonDetail({ ...personDetail, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(personDetail, personAllergens);
    onCancel();
  };

  return (
    <form
      className="flex flex-col flex-1 w-full h-full  bg-zinc-300"
      onSubmit={handleSubmit}
    >
      <div className={`grid grid-cols-6 gap-4 m-4`}>
        <div className="grid col-start-2 justify-end">Prénom</div>
        <input
          className="grid col-start-3 bg-zinc-200 rounded-l"
          type="text"
          value={personDetail.firstname}
          onChange={(e) =>
            setPersonDetail({ ...personDetail, firstname: e.target.value })
          }
        />
        <div className="grid col-start-4 justify-end">Nom</div>
        <input
          className="grid col-start-5 bg-zinc-200 rounded-l"
          type="text"
          value={personDetail.lastname}
          onChange={(e) =>
            setPersonDetail({ ...personDetail, lastname: e.target.value })
          }
        />
      </div>
      <TabMenu>
        <TabItem
          tabName="address"
          isSelected={activeTab === "address"}
          onClick={handleTabSelect}
        >
          Adresse
        </TabItem>
        <TabItem
          tabName="health"
          isSelected={activeTab === "health"}
          onClick={handleTabSelect}
        >
          Santé
        </TabItem>
        <TabItem
          tabName="ice"
          isSelected={activeTab === "ice"}
          onClick={handleTabSelect}
        >
          Contact d'urgence
        </TabItem>
      </TabMenu>
      {activeTab === "address" && (
        <PersonAddressForm
          streetName={personDetail.street_name}
          streetNumber={personDetail.street_number}
          zip={personDetail.zip}
          city={personDetail.city}
          onChange={handleEditFormular}
        />
      )}
      {activeTab === "health" && (
        <PersonHealthForm
          personId={personDetail.id}
          isVegetarian={personDetail.isvegetarian}
          healthCondition={personDetail.health_condition}
          onChange={handleEditFormular}
          personAllergenList={personAllergens}
          setPersonAllergenList={setPersonAllergens}
        />
      )}
      {activeTab === "ice" && (
        <PersonICEForm
          iceContactName={personDetail.emergency_contact_name}
          iceContactNumber={personDetail.emergency_contact_number}
          iceContactDescription={personDetail.emergency_contact_description}
          onChange={handleEditFormular}
        />
      )}
      <div className="flex flex-row justify-around gap-4 m-2">
        <CancelButton onClick={onCancel} />
        <ConfirmButton submit />
      </div>
    </form>
  );
}

export default PersonAddForm;
