import { Trash, SquarePen } from "lucide-react";

function PersonList({ firstName, lastName, onClickEdit, onClickDelete }) {
  return (
    <>
      <div className="font-semibold w-1/3">{firstName}</div>
      <div className="font-semibold w-1/3" >{lastName}</div>
      <div className='w-1/4'>
        <button onClick={onClickEdit}>
          <SquarePen className="stroke-blue-600 hover:bg-blue-400 hover:cursor-pointer hover:stroke-black rounded-l" />
        </button>
      </div>
      <div>
        <button onClick={onClickDelete}>
          <Trash className="stroke-red-600 hover:bg-red-400 hover:cursor-pointer hover:stroke-black rounded-l" />
        </button>
      </div>
    </>
  );
}

export default PersonList;
