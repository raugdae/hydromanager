import EventCard from "../../components/event/EventCard";
import { useEvent } from "../../hooks/useEvent";
import { useState, useEffect } from "react";



function EventList() {
  const [listEvent, setListEvent] = useState([]);

  const { fetchEventList } = useEvent();

  useEffect(() => {
    const loadEvents = async () => {
      const events = await fetchEventList();
      setListEvent(events);
      console.log("Events : ", events);
    };

    loadEvents();
  },[]);

  return (
    <div className="flex flex-1 gap-4 flex-wrap justify-around w-full">
      {listEvent.map((item) => (
        <>
          <EventCard
            key={item.id}
            id={item.id}
            title={item.event_name}
            date={item.start_date}
            location={item.city}
            showButton
            
          />
        </>
      ))}
    </div>
  );
}

export default EventList;
