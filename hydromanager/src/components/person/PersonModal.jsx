import { X } from "lucide-react";

function PersonModal({ isOpen, onClose, children }) {

  

  if (!isOpen) return;

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className=" flex flex-col w-200 h-160  bg-zinc-600 mx-auto my-24">
        <div className="flex flex-row">
          <div className="flex flex-1 font-bold text-zinc-200 px-2"> Ajouter / Modifier une personne</div>
          <div className="flex justify-end">
            <button
              className="bg-zinc-400 hover:cursor-pointer"
              onClick={onClose}
            >
              <X className='stroke-red-600 hover:stroke-black hover:cursor-pointer hover:bg-red-600 transition-colors'/>
            </button>
          </div>
        </div>
        <div className="flex w-full h-full">{children}</div>
      </div>
    </div>
  );
}

export default PersonModal;
