import { useState, useEffect } from "react";
import { useAttendee } from "../../hooks/useAttendee";
import { Trash, UserPlus, Ticket } from "lucide-react";
import { useGroup } from "../../hooks/useGroup.js";
import PlayerGroup from "../players/PlayerGroup";
import PlayerRemoveMessage from './PlayerRemoveMessage.jsx';
import PlayerAddGroup from './PlayerAddGroup.jsx';
import PlayerModal from './PlayerModal.jsx';
import PlayerTicketForm from "./PlayerTicketForm.jsx";

function PlayerCard({ firstName, lastName, attendeeid, reloadParent}) {
  const [playerGroups, setPlayerGroups] = useState([]);
  const { getPlayerGroups,removePlayer } = useAttendee();
  const { deletePlayerGroup} = useGroup();

  const [showPlayerDeleteMessage,setShowPlayerDeleteMessage] = useState(false);
  const [showPlayerTicket,setShowPlayerTicket] = useState(false);
  const [showAddGroup,setShowAddGroup] = useState(false);
  const [reloading,setReloading] = useState(false);
  const [defineModalType,setDefineModalType] = useState('');

  useEffect(() => {
    const fetchPlayerGroups = async () => {
      const response = await getPlayerGroups(attendeeid);
      setPlayerGroups(response.data);
    };

    fetchPlayerGroups();

  }, []);

    useEffect(() => {
    const fetchPlayerGroups = async () => {
      const response = await getPlayerGroups(attendeeid);
      setPlayerGroups(response.data);
    };

    fetchPlayerGroups();

  }, [showAddGroup,showPlayerDeleteMessage,reloading]);

  const handleRemovePlayer = () => {
    setShowPlayerDeleteMessage(true)
  }

  const handlePlayerTicket = () => {
    setDefineModalType('ticket');
    setShowPlayerTicket(true);
  }

  const handleConfirmRemove = () => {
    
    removePlayer(attendeeid);
    setShowPlayerDeleteMessage(false);
    reloadParent(true); 
  }

  const handleAddGroup = () => {
    
    setShowAddGroup(true);
    reloadParent(true); 

  }

   const handleDeletePlayerGroup = async (recordId) => {
    setReloading(true);
    await deletePlayerGroup(recordId);
    setReloading(false);
 }


  return (
    <><PlayerModal
        isOpen={showPlayerTicket}
        onClose={() => setShowPlayerTicket(false)}
        modalType={defineModalType}
      ><PlayerTicketForm attendeeId={attendeeid} firstName={firstName} lastName={lastName}/></PlayerModal>
    <div className="relative grid grid-cols-[2fr_2fr_2fr_6fr] content-start p-2 drop-shadow-xl">
      <div className="bg-zinc-400">
        <span className="font-semibold p-2">Prénom : </span>
        {firstName}
      </div>
      <div className="bg-zinc-400 p-2">
        <span className="font-semibold">Nom : </span>
        {lastName}
      </div>
      <div className='bg-zinc-400 mr-2'>

      </div>
      <div className="col-start-1 row-start-2 bg-zinc-200 p-2 gap-4 flex flex-col items-center overflow-hidden">
        <div className='font-semibold p-2'>Ajouter un groupe</div>
        <button onClick={() => handleAddGroup()} className=''><UserPlus className="stroke-blue-800 hover:bg-blue-200 hover:stroke-black hover:cursor-pointer rounded"/></button>
      </div>
      <div className="col-start-2 row-start-2 bg-zinc-200  p-2 gap-4 flex flex-col items-center min-w-l">
        <div className='font-semibold p-2 justify-self-center'>Supprimer participant</div>
        <button onClick={() => handleRemovePlayer()}><Trash className="stroke-red-600 hover:bg-red-400 hover:stroke-white hover:cursor-pointer rounded justify-self-center"/></button>
      </div>
      <div className="col-start-3 row-start-2 bg-zinc-200  mr-2 p-2 gap-4 flex flex-col items-center min-w-l">
        <div className='font-semibold p-2 justify-self-center'>Voir le billet</div>
        <button onClick={() => handlePlayerTicket()}><Ticket className="stroke-green-600 hover:bg-green-400 hover:stroke-black hover:cursor-pointer rounded justify-self-center"/></button>
      </div>

      <div className="row-start-1 col-start-4 border-t-2 border-x-2">
        Groupes :
      </div>
      <div className="row-start-2 col-start-4 flex flex-col w-full p-4 border-b-2 border-x-2 max-h-72 flex-wrap">
        {playerGroups.map((item) => {
          return (
            <>
            
              <PlayerGroup groupeName={item.group_name} recordId={item.id} onDelete={handleDeletePlayerGroup}/>
              
            </>
          );
        })}
        {showAddGroup && (<PlayerAddGroup onCancel={(e) => setShowAddGroup(false)} attendeeid={attendeeid} />)}
      </div>
      {showPlayerDeleteMessage && (<PlayerRemoveMessage firstName={firstName} lastName={lastName} onConfirm={handleConfirmRemove} onCancel={() => setShowPlayerDeleteMessage(false)}></PlayerRemoveMessage>)}
      
      
    </div>
    </>
  );
}

export default PlayerCard;
