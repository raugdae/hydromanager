import {useState,useEffect} from 'react';
import {usePerson} from '../../hooks/usePerson';

function ManagePlayers() {

  const {getPersons} = usePerson();

  const [personList,setPersonList] = useState([]);

  useEffect(() => {
    const fetchPersonList = async () => {
      const response = await getPersons();
      setPersonList(response.data);
    }
  },[])

  return (
    <div>
      <div className="bg-pink-400">Gestion des Participants</div>
      <div className="flex flex-col flex-1 w-full h-full">
        <div className="grid grid-cols-4 animate-fade-in-up">
          <div>
            {personList.map((item) => {
              return <div>{item.firstname}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManagePlayers;
