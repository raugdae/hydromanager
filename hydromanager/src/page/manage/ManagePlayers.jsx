import { useState, useEffect } from "react";
import { usePerson } from "../../hooks/usePerson";
import { useAttendee } from '../../hooks/useAttendee';

import PlayerCard from '../../components/players/PlayerCard';
import AddButton from '../../components/common/AddButton';

function ManagePlayers() {
  const { getPersons } = usePerson();
  const {getEventPlayers,addPlayer} = useAttendee();

  const [personList, setPersonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    const fetchPersonList = async () => {
      const response = await getPersons(setIsLoading);
      setPersonList(response.personlist);
      console.log(personList);
    };

    const fetchAttendeeList = async() => {
      const response = await getEventPlayers();
      setPlayerList(response.data);
      console.log(playerList)
    }

    fetchAttendeeList();
    fetchPersonList();
  }, []);

  

  return (
    <div className="flex flex-col w-full h-full bg-pink-400">
      Gestion des Participants
      <AddButton />
      <div className="flex flex-col flex-1 w-full h-full">
        <div className="grid grid-cols-4 animate-fade-in-up">
          {playerList.map((item) => {
            console.log(item);
            return (
              <>
                <PlayerCard firstName={item.firstname} lastName={item.lastName}/>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ManagePlayers;
