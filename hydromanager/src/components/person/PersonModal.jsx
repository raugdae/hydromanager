import {X} from 'lucide-react';

function PersonModal({ isOpen, onClose, children }) {

  if (!isOpen) return;

  return (

      <div className="fixed inset-0 z-50 bg-black/50">
        <div className="w-200 h-100 bg-zinc-300 mx-auto my-24">
          <button
            className="bg-zinc-400 hover:cursor-pointer"
            onClick={onClose}
          >
            <X/>
          </button>
          <div className='flex w-full h-full'>
          {children}
          </div>
        </div>
        
      </div>
      
    
  );
}

export default PersonModal;
