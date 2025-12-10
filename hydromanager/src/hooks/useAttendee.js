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

  const addPlayer = async (personId) => {

    const data = [{personid: personId,eventid: localStorage.getItem('eventid')}]



    try {
        const result = await api.post(`/admin/event/${data.eventid}/addAttendee`,data)
        return result.data
    }catch (error){
        console.log(error, error.message);
    }
  }

  return {getEventPlayers,addPlayer};
};
