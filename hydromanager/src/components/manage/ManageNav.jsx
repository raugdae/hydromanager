import { Link } from "react-router-dom";
import { useManager } from "../../contexts/ManagerContext";

function ManageNav() {
  const { eventName } = useManager(); 

  return (
    <div className="flex flex-col h-full gap-2 py-4 border-2 border-amber-500 min-w-1/7">
      <div>{eventName}</div>
      <Link
        className="flex rounded-r-xl px-4 bg-linear-to-r from-green-500 to-green-600"
        to="/manage"
      >
        Liste des évènements
      </Link>
      <Link
        className="flex rounded-r-xl px-4 bg-linear-to-r from-green-500 to-green-600"
        to="eventgroups"
      >
        Groupes
      </Link>
    </div>
  );
}

export default ManageNav;
