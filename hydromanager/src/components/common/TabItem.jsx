function TabItem({ children, isSelected = false, onClick, tabName='' }) {
  return (
    <button type='button'
      onClick={()=>onClick(tabName)}
      className={`flex flex-1 rounded-t-xl border-l border-r ${
        isSelected ? "bg-zinc-400 font-bold" : "bg-zinc-200"
      } w-full justify-center border-t hover:cursor-pointer`}
    >
      {children}
    </button>
  );
}
export default TabItem;
