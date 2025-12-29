import { Trash } from "lucide-react";

function PlayerGroup({ groupeName, recordId, onDelete }) {
  return (
    //<div className="has-[>Trash:hover]:from-amber-800 has-[:hover]:to-amber-600 flex flex-row justify-around w-1/4 bg-linear-180 from-emerald-700 to-emerald-950 text-white font-semibold p-4 transition-all duration-1000">
    <div className="has-[svg:hover]:bg-red-800 flex flex-row justify-around w-3/5 border-b-2 border-black bg-zinc-200 text-black drop-shadow-xl transition-all duration-300">
      <div className='flex-1 text-center'>{groupeName}</div>
      <div>
        <Trash
          onClick={() => onDelete(recordId)}
          className="stroke-red-600 rounded hover:stroke-black hover:cursor-pointer "
        />
      </div>
    </div>
  );
}
export default PlayerGroup;
