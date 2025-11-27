function GroupModal({ isOpen, onClose, children }) {

  if (!isOpen) return;

  return (

      <div className="fixed inset-0 z-50 bg-black/50">
        <div className="w-1/3 h-1/3 bg-zinc-300 mx-auto my-24">
          <button
            className="bg-zinc-400 hover:cursor-pointer"
            onClick={onClose}
          >
            fermer
          </button>

          {children}
        </div>
        
      </div>
      
    
  );
}

export default GroupModal;
