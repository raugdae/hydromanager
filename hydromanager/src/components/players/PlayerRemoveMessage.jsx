import DeleteButton from "../common/DeleteButton";
import CancelButton from "../common/CancelButton";

function PlayerRemoveMessage({ firstName, lastName,onCancel,onConfirm }) {
  return (
    <div className="absolute inset-0 z-10 grid grid-cols-4 bg-zinc-200 flex-1 justify-items-center">
      <div className="col-span-2 col-start-2 text-2xl font-bold">
        Etes-vous sur de vouloir supprimer ce participant?
      </div>
      <div className='col-start-2 row-start-2 col-span-2'><span>{firstName}</span> <span>
      {lastName}</span>
      </div>
      <div className='col-start-2 row-start-3'>
        <CancelButton onClick={onCancel}>Non</CancelButton>
      </div>
      <div className='col-start-3 row-start-3'>
        <DeleteButton onClick={onConfirm}>Oui</DeleteButton>
      </div>
    </div>
  );
}

export default PlayerRemoveMessage;
