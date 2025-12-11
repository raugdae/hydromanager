import { useState, useEffect } from "react";
import { useAttendee } from "../../hooks/useAttendee";

import PlayerGroup from '../players/PlayerGroup';

function PlayerCard({ firstName, lastName, id }) {
  const [playerGroups, setPlayerGroups] = useState([]);
  const { getPlayerGroups } = useAttendee();

  useEffect(() => {
    const fetchPlayerGroups = async () => {
      const response = await getPlayerGroups(id);
      setPlayerGroups(response.data);
    };

    fetchPlayerGroups();
  }, []);

  useEffect(() => {
    console.log(playerGroups);
  }, [playerGroups]);

  return (
    <div className="grid grid-cols-[2fr_2fr_6fr] content-start py-2 ">
      <div className='bg-emerald-400'><span className='font-semibold'>Prénom : </span>{firstName}</div>
      <div className='bg-emerald-400 mr-2'><span className='font-semibold'>Nom : </span>{lastName}</div>
      <div className='col-start-1 col-span-2 bg-emerald-500 mr-2'>supprimer</div>
      <div className='row-start-1 col-start-3 border-t-2 border-x-2'>Groupes :</div>
      <div className='row-start-2 col-start-3 flex flex-row w-full p-4 gap-4 border-b-2 border-x-2 flex-wrap'>

        {playerGroups.map((item) => {
          return <><PlayerGroup groupeName={item.group_name}/></>
        })}
      </div>

    </div>
  );
}

export default PlayerCard;
