function GroupCard({ groupName, parentGroup = null, onClick }) {
  return (
    <div className="flex flex-1 flex-col border-2 p-4 gap-2 max-h-1/2">
      <div className="flex flex-row gap-2">
        <div className='flex font-semibold'>Nom du groupe :</div>
        <div className='flex'>{groupName}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className='font-semibold'>Groupe parent :</div>
        <div>{parentGroup || 'Aucun'}</div>
      </div>
      <button className='hover:cursor-pointer rounded-xl bg-green-600' onClick={onClick}>Modifier</button>
    </div>
  );
}
export default GroupCard;