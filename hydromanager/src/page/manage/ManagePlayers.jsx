import { useState, useEffect } from "react";
import { usePerson } from "../../hooks/usePerson";

function ManagePlayers() {
  const { getPersons } = usePerson();

  const [personList, setPersonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPersonList = async () => {
      const response = await getPersons(setIsLoading);
      setPersonList(response.personlist);
      console.log(personList);
    };

    fetchPersonList();
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-pink-400">
      Gestion des Participants
      <div className="flex flex-col flex-1 w-full h-full">
        <div className="grid grid-cols-4 animate-fade-in-up">
          {personList.map((item) => {
            console.log(item);
            return (
              <>
                <div className="col-span-2">{item.firstname}</div>
                <div>{item.lastname}</div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ManagePlayers;
