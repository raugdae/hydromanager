import { Link } from "react-router-dom";
import { useManager } from "../../contexts/ManagerContext";

function ManageNav() {
  const { eventName } = useManager();
  return (
    <div className="flex flex-col h-1/2 gap-2 py-4 min-w-1/7">
      <div>{eventName || "Aucun évènement sélectionné"}</div>
      <Link
        className="flex rounded-r-xl px-4 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-800 transition-colors"
        to="/manage"
      >
        Liste des évènements
      </Link>
      <Link
        className="flex rounded-r-xl px-4 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-800 transition-colors"
        to="eventgroups"
      >
        Groupes
      </Link>
      <Link
        className="flex rounded-r-xl px-4 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-800 transition-colors"
        to="eventplayers"
      >
        Participants
      </Link>
      <Link
        className="flex rounded-r-xl px-4 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-800 transition-colors"
        to="manageperson"
      >
        Personne
      </Link>
    </div>
  );
}
export default ManageNav;
