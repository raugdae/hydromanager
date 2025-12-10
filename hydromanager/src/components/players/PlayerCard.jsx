import {useState, useEffect} from 'react';


function PlayerCard({ firstName, lastName}) {
    const [playerGroups,setPlayerGroups] = useState([]);

  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div className='bg-amber-400'>{playerGroups.map((item) => {
        return (item)})}</div>
    </div>
  );
}

export default PlayerCard
