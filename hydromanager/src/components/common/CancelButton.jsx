function CancelButton({ onClick, children = "Annuler" }) {
  return (
    <button className="bg-amber-600 rounded-2xl px-2 border-amber-800 border-2 hover:cursor-pointer hover:bg-amber-900 hover:text-amber-200 w-48" onClick={onClick}>
      {children}
    </button>
  );
}
export default CancelButton;
