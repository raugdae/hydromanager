import { SquarePen, Trash } from "lucide-react";

function GroupCard({
  groupName,
  parentGroup = null,
  onClickEdit,
  onClickDelete,
}) {
  return (
    <div className="animate-fade-in-up opacity-0 grid h-48 w-72 grid-cols-2 grid-rows-3 border-b-2 border-emerald-900 bg-linear-to-b from-green-600 to-green-200 p-4 gap-2">
      <div className="font-semibold">Nom du groupe</div>
      <div>{groupName}</div>

      <div className="font-semibold ">Groupe parent</div>
      <div>{parentGroup || "Aucun"}</div>
      <div className="self-end">
        <button onClick={onClickEdit}>
          <SquarePen size={32} className='stroke-blue-600 hover:bg-blue-400 hover:cursor-pointer hover:stroke-black rounded-l' />
        </button>
      </div>
      <div className="justify-self-end self-end">
        <button onClick={onClickDelete} >
          <Trash size={32} className='stroke-red-600 hover:bg-red-400 hover:cursor-pointer hover:stroke-black rounded-l'/>
        </button>
      </div>
    </div>
  );
}
export default GroupCard;
