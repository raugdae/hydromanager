import { Link } from "react-router-dom";
import { useManager } from "../../contexts/ManagerContext";

function ManageNav() {
  const { eventName } = useManager();
  const linkClassDef = "flex rounded-r-xl px-4 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-800 hover:translate-x-4 transition-transform";
  return (
    <div className="flex flex-col h-1/2 gap-2 py-4 min-w-1/7">
      <div>{eventName || "Aucun évènement sélectionné"}</div>
      <Link
        className={linkClassDef}
        to="/manage"
      >
        Liste des évènements
      </Link>
      <Link
        className={linkClassDef}
        to="eventgroups"
      >
        Groupes
      </Link>
      <Link
        className={linkClassDef}
        to="eventplayers"
      >
        Joueurs
      </Link>
      <Link
        className={linkClassDef}
        to="manageperson"
      >
        Personne
      </Link>
    </div>
  );
}
export default ManageNav;
