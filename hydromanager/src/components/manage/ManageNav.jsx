import { NavLink } from "react-router-dom";
import { useManager } from "../../contexts/ManagerContext";

function ManageNav() {
  const { eventName } = useManager();
  
  const linkClass = ({ isActive }) =>
    `flex border-l-2 px-4 hover:bg-zinc-200 hover:translate-x-4 transition-transform ${
      isActive 
        ? 'border-green-600 text-green-600 font-semibold' 
        : 'border-gray-300 text-gray-600'
    }`;

  return (
    <div className="flex flex-col h-1/2 gap-2 py-4 min-w-1/7">
      <div className='border-t border-green-300 font-bold'>Evènement</div>
      <div>{eventName || "Aucun évènement sélectionné"}</div>
      <NavLink className={linkClass} to="/manage" end>
        Liste des évènements
      </NavLink>
      <NavLink className={linkClass} to="eventgroups">
        Groupes
      </NavLink>
      <NavLink className={linkClass} to="eventplayers">
        Participants
      </NavLink>
      <div className='border-t border-green-300 font-bold'>Administration</div>
      <NavLink className={linkClass} to="manageperson">
        Personne
      </NavLink>
    </div>
  );
}

export default ManageNav;