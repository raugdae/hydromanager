
import {useManager} from '../../contexts/ManagerContext';

function EventCard({
  title = "placeholder",
  date = "placeholder",
  location = "placeholder",
  id,
  showButton = false,
  
}) {

  const {eventName,setEventName} = useManager();


  return (
    <div className={`flex flex-col flex-1 flex-wrap items-center gap-4 border-2 max-h-1/2 justify-around text-white ${title === eventName ? 'bg-green-800' : 'bg-green-600'} hover:scale-105 transition-transform`}>
      <div className='flex flex-col items-center gap-2'>
        <div className='font-bold'>{title}</div>
        <div>{new Date(date).toLocaleDateString('fr-CH')}</div>
        <div>{location}</div>
      </div>
      <div className="flex w-full justify-center align-bottom ">
        {showButton && title!== eventName && <button
          className="rounded-xl px-2 hover:cursor-pointer bg-zinc-400 hover:bg-zinc-900 hover:text-white"
          onClick={() => {
            localStorage.setItem("eventid", id);
            setEventName(title);
          }}
        >
          Sélectionner
        </button>}
      </div>
    </div>
  );
}
export default EventCard;
