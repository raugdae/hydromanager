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
    <div className="grid grid-cols-[2fr_2fr_1fr_5fr] grid-rows-3 content-start">
      <div><span>Prénom : </span>{firstName}</div>
      <div><span>Nom : </span>{lastName}</div>
      <div >Groupes :</div>
      <div className="bg-amber-400">
        {playerGroups.map((item) => {
          return <><PlayerGroup groupeName={item.group_name}/><PlayerGroup groupeName={item.group_name}/><PlayerGroup groupeName={item.group_name}/><PlayerGroup groupeName={item.group_name}/></>
        })}
      </div>

    </div>
  );
}

export default PlayerCard;
