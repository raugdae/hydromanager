import api from "../api/axios";

export const useAttendee = () => {

  const getEventPlayers = async () => {
    const eventid = localStorage.getItem("eventid");

    try {
      const result = await api.get(`/admin/event/${eventid}/attendees`);
      return result.data;
    } catch (error) {
      console.log(error, error.message);
    }
  };

  const addPlayer = async (personList) => {

    
    try {
        
        const result = await Promise.all(personList.map((item) => api.post(`/admin/event/${item.eventid}/addAttendee`,item)));
        return result.data
    }catch (error){
        console.log(error, error.message);
    }
  }

  const getPlayerCount = async () => {

    try {
      const result = await api.get(`/admin/event/${eventid}/countAttendee`)
      return result.data

    }catch (error){
      console.log(error, error.message);
    }
  }

  const getPlayerGroups = async (attendeeid) => {

    const eventId = localStorage.getItem('eventid');
    const attendeeId = attendeeid;

    console.log(attendeeId);
    try {
      const result = await api.get(`/admin/event/${eventId}/attendee/${attendeeId}/getGroups`)
      return result.data;
    }
    catch (error){
      console.log(error,error.message);
    }


  }

  const removePlayer = async (attendeeid) => {

    
    const eventId = localStorage.getItem('eventid');
    console.log(attendeeid);

    try{
      console.log('delete',attendeeid)
      const result = await api.delete(`/admin/event/${eventId}/attendee/${attendeeid}/removeAttendee`,attendeeid)
      return result;
    }
    catch (error){
      console.log(error,error.message);
    }
  }

  return {getEventPlayers,getPlayerCount,addPlayer,getPlayerGroups,removePlayer};
}
