import { usePerson } from "../../hooks/usePerson";
import { useState, useEffect } from "react";
import { useAllergens } from "../../hooks/useAllergens";

import PersonList from "../../components/person/PersonList";
import PersonModal from "../../components/person/PersonModal";
import PersonEditForm from "../../components/person/PersonEditForm";
import PersonAddForm from '../../components/person/PersonAddForm';
import PersonDeleteMessage from "../../components/person/PersonDeleteMessage";
import AddButton from "../../components/common/AddButton";

function ManagePerson() {
  const [personList, setPersonList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [modalType, setModalType] = useState("");
  const { getPersons, updatePersonDetail, addPerson } = usePerson();
  const { setPersonAllergen } = useAllergens();

  async () => {
    const list = await getPersons();
    setPersonList(list.personlist);
  };

  useEffect(() => {
    const fetchPersons = async () => {
      const list = await getPersons();
      setPersonList(list.personlist);
    };

    fetchPersons();
  }, []);

  const handleEdit = (item) => {
    setIsModalOpen(true);
    setModalType("edit");
    setSelectedItem(item);
  };

  const handleDelete = (item) => {
    setIsModalOpen(true);
    setModalType("del");
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (personData, allergenData) => {
    setPersonAllergen(personData.id, allergenData);
    updatePersonDetail(personData.id, personData);
    return;
  };

  const handleAddPerson = (formData) => {
    setIsModalOpen(true);
    addPerson(formData);
    setModalType('new');
  };

  const handleSubmitNew = (personData,AllergenData) =>{
    
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full justify-center font-extrabold text-2xl">
        Gestion des personnes
      </div>
      <AddButton handleButtonClick={handleAddPerson}/>
      <div
        className={`grid grid-cols-[4fr_4fr_1fr_1fr] px-4 grid-rows-1 animate-fade-in-up w-full border-b-2`}
      >
        <div className="font-bold">Prénom</div>
        <div className="font-bold">Nom</div>
        <div className="font-bold">Modifier</div>
        <div className="font-bold">Supprimer</div>
      </div>
      <div
        className={`grid grid-cols-[4fr_4fr_1fr_1fr] px-4 grid-rows-${personList.length} animate-fade-in-up w-full`}
      >
        {personList
          .sort((a, b) => a.lastname.localeCompare(b.lastname))
          .map((item, index) => {
            return (
              <PersonList
                key={index}
                firstName={item.firstname}
                lastName={item.lastname}
                onClickEdit={() => handleEdit(item)}
                onClickDelete={() => handleDelete(item)}
              ></PersonList>
            );
          })}
      </div>
      <PersonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalType === "edit" && (
          <PersonEditForm
            id={selectedItem.id}
            onSubmit={handleSubmit}
            onCancel={handleClose}
          ></PersonEditForm>
        )}
        {modalType === "del" && (
          <PersonDeleteMessage
            selectedPerson={selectedItem}
            onCancel={handleClose}
            handleSubmit={""}
          />
        )}
        {modalType === "new" && (
          <PersonAddForm
            onSubmit={handleAddPerson}
            onCancel={handleClose}
          ></PersonAddForm>
        )}
      </PersonModal>
    </div>
  );
}
export default ManagePerson;
