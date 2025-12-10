import { Trash, SquarePen } from "lucide-react";

function PersonList({ firstName, lastName, onClickEdit, onClickDelete }) {
  return (
    <div className="group contents">
      <div className="font-semibold group-hover:bg-zinc-200 border-b-2 py-2">{firstName}</div>
      <div className="font-semibold group-hover:bg-zinc-200 border-b-2 py-2">{lastName}</div>
      <div className="flex flex-row group-hover:bg-zinc-200 border-b-2">
        <button 
          className="flex hover:bg-blue-400 hover:cursor-pointer rounded m-2" 
          onClick={onClickEdit}
        >
          <SquarePen className="stroke-blue-600 group-hover:stroke-black" />
          <span className="text-blue-400 font-bold group-hover:text-black">Modifier</span>
        </button>
      </div>
      <div className="flex flex-row group-hover:bg-zinc-200 border-b-2">
        <button 
          className="flex hover:bg-red-400 rounded m-2 hover:cursor-pointer" 
          onClick={onClickDelete}
        >
          <Trash className="stroke-red-600 group-hover:stroke-black" />
          <span className="text-red-400 font-bold group-hover:text-black">Supprimer</span>
        </button>
      </div>
    </div>
  );
}

export default PersonList;