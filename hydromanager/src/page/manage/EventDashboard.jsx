import { useState, useEffect } from "react";
import { useDashboard } from "../../hooks/useDashboard";

function EventDashboard() {
  const { getDashboardData } = useDashboard();

  const [dashboardData, setDashboardData] = useState({
    succes: false,
    groupList: [],
    groupWithChildList: [],
    attendeeCountproGroup: [],
  });

  const [groupwWithAttendees, setGroupWithAttendees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDashboardData();
      console.log(result);
      setDashboardData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredGroups = dashboardData.attendeeCountproGroup.filter(
      (value) => value.attendees > 0
    );
    setGroupWithAttendees(filteredGroups);
  }, [dashboardData]);

  if (!localStorage.getItem("eventid"))
    return <div>Merci de sélectionner un évènement</div>;
  else {
    return (
      <div className="border-2 grid grid-cols-4 grid-rows-4 w-full gap-2 max-h-5/6">
        <div className="flex flex-col col-span-1 row-span-2 m-2 overflow-y-auto">
          <div className="flex flex-row w-full justify-around bg-zinc-200 ">
            <div className="text-center font-bold flex-3">Groupes</div>
            <div className="font-bold flex-1">
              Nbre
            </div>
          </div>
          {groupwWithAttendees.map((item) => {
            return (
              <div className="flex flex-row w-full justify-around bg-zinc-50 border-t-2 border-green-950">
                <div className="flex-3 text-center">{item.groupe}</div>
                <div className="flex-1"> {item.attendees}</div>
              </div>
            );
          })}
        </div>
        <div className="bg-amber-200"></div>
        <div className="bg-amber-400"></div>
        <div className="bg-amber-600"></div>

      </div>
    );
  }
}
export default EventDashboard;
