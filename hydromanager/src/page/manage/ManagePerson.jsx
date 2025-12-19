import { usePerson } from "../../hooks/usePerson";
import { useState, useEffect } from "react";
import { useAllergens } from "../../hooks/useAllergens";

import PersonList from "../../components/person/PersonList";
import PersonModal from "../../components/person/PersonModal";
import PersonEditForm from "../../components/person/PersonEditForm";
import PersonAddForm from "../../components/person/PersonAddForm";
import PersonDeleteMessage from "../../components/person/PersonDeleteMessage";
import AddButton from "../../components/common/AddButton";

function ManagePerson() {
  const [personList, setPersonList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [modalType, setModalType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchBox, setSearchBox] = useState("");

  const { getPersons, updatePersonDetail, addPerson, deletePerson } =
    usePerson();
  const { setPersonAllergen } = useAllergens();

  async () => {
    const list = await getPersons();
    setPersonList(list.personlist);
  };

  useEffect(() => {
    const fetchPersons = async () => {
      const list = await getPersons(setIsLoading);
      setPersonList(list.personlist);
    };

    fetchPersons();
  }, [isModalOpen]);

  const filteredList = personList.filter((person) => {
    return (
      person.lastname.toLowerCase().includes(searchBox.toLowerCase()) ||
      person.firstname.toLowerCase().includes(searchBox.toLowerCase())
    );
  });

  const handleEdit = (item) => {
    setIsModalOpen(true);
    setModalType("edit");
    setSelectedItem(item);
  };

  const handleDelete = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
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

  const handleAdd = () => {
    setIsModalOpen(true);
    setModalType("new");
  };

  const handleAddPerson = async (formData, allergenData) => {
    const newPersonId = await addPerson(formData);
    setPersonAllergen(newPersonId, allergenData);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full justify-center font-extrabold text-2xl ">
        Gestion des personnes
      </div>
      <div>
      <AddButton handleButtonClick={handleAdd} />
      </div>
      <div
        className={`grid grid-cols-[4fr_4fr_1fr_1fr] px-4 grid-rows-1 animate-fade-in-up w-full`}
      >
        <div className="font-bold">Nom</div>
        <div className="font-bold">Prénom</div>
        <div></div>
        <div>
          <input
            type="text"
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
            placeholder="Rechercher..."
          />
        </div>
      </div>
      <div
        className={`grid grid-cols-[4fr_4fr_1fr_1fr] mx-4 items-center animate-fade-in-up w-full `}
      >
        {!isLoading &&
          filteredList
            .sort((a, b) => a.lastname.localeCompare(b.lastname))
            .map((item, index) => {
              return (
                <>
                  <PersonList
                    key={index}
                    firstName={item.firstname}
                    lastName={item.lastname}
                    onClickEdit={() => handleEdit(item)}
                    onClickDelete={() => handleDelete(item)}
                  ></PersonList>
                </>
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
            onSubmit={deletePerson}
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
