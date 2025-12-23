import { useState, useEffect } from "react";
import { usePerson } from "../../hooks/usePerson";
import { useAttendee } from "../../hooks/useAttendee";

import PlayerCard from "../../components/players/PlayerCard";
import PlayerModal from "../../components/players/PlayerModal";
import PlayerAddForm from "../../components/players/PlayerAddForm";
import AddButton from "../../components/common/AddButton";

function ManagePlayers() {



  const { getPersons } = usePerson();
  const { getEventPlayers, addPlayer, removePlayer } = useAttendee();

  const [personList, setPersonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const [filteredPersonList, setFilteredPersonList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [reloadParent,setReloadParent] = useState(false);

  useEffect(() => {
    const fetchPersonList = async () => {
      const response = await getPersons(setIsLoading);
      setPersonList(response.personlist);
    };

    const fetchAttendeeList = async () => {
      const response = await getEventPlayers();
      setPlayerList(response.data);
    };



    fetchAttendeeList();
    fetchPersonList();

    
    
  }, []);

  useEffect(() => {
   const fetchPersonList = async () => {
      const response = await getPersons(setIsLoading);
      setPersonList(response.personlist);
    };

    const fetchAttendeeList = async () => {
      const response = await getEventPlayers();
      setPlayerList(response.data);
    };

    fetchAttendeeList();
    fetchPersonList();
    setReloadParent(false);
    console.log(playerList);
  },[showModal,reloadParent])

  
  useEffect(() => {
    const playerIdList = new Set(playerList.map((item) => item.personid));
      console.log(playerIdList);
      setFilteredPersonList(
        personList.filter((person) => !playerIdList.has(person.id))
      );},[playerList])

  const handleAddPlayer = () => {
    setShowModal(true);
    setModalType("new");
  };

  if(!localStorage.getItem('eventid')) 
    return(<div>Merci de sélectionner un évènement</div>)

    return (
    <div className="flex flex-col w-full h-full">
      Gestion des Joueurs
      <AddButton handleButtonClick={handleAddPlayer} />
      <div className="flex flex-col flex-1 w-full h-full">
        
          {playerList.map((item) => {
            return ( 
              <>
                <PlayerCard
                  firstName={item.firstname}
                  lastName={item.lastname}
                  attendeeid={item.attendeeid}
                  reloadParent={setReloadParent}
                />
                </>
              
            );
          })}
        
      </div>
      <PlayerModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        modalType={modalType}
      >
        {modalType === "new" && (
          <PlayerAddForm
            personList={filteredPersonList}
            onCancel={() => setShowModal(false)}
          ></PlayerAddForm>
        )}
        
      </PlayerModal>
    </div>
  );
}
export default ManagePlayers;
