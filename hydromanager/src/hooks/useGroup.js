import api from '../api/axios'

export const useGroup = () => {

    const updateGroup = async (data) =>{
        const eventid = localStorage.getItem('eventid');
        const groupid = data.id;
        const body = {groupe:data.groupe,fk_parentgroupid:data.fk_parentgroupid}

        console.log(body)

        try{
            const result = await api.put(`/admin/event/${eventid}/groups/${groupid}/updateEventGroup`,body)
            return result.data;
        }
        catch(err){
            console.log(err,err.message);
        }
        
    }

    const addGroup = async (data) => {
        const eventid = localStorage.getItem('eventid');
        const body = {groupname:data.groupe,parentid:data.fk_parentgroupid}

        console.log(body);

        try{
            const result = await api.post(`/admin/event/${eventid}/addgroup`,body)
            return result;
        }
        catch(err){

            console.log(err,err.message);
        }
    }

    const deleteGroup = async (data) => {
        const eventid = localStorage.getItem('eventid');
        const groupid = data.id;

        try{
            const result = await api.delete(`/admin/event/${eventid}/groups/deleteGroup/${groupid}`)
            return result;
        }
        catch(error){
            if (error.response?.status ===403){
                throw error.response;
            }
            console.log(error,error.message);
        }
    }

    /*const getPlayerGroups = async (personId) => {
        
        try {
            const result = await api.get(``)
            return result;
        }
        catch(error){
            console.log(error, error.message)
        }

    }*/

        const getEventGroups = async () => {

            const eventid = localStorage.getItem('eventid');
            try{
                const result = await api.get(`/admin/event/${eventid}/getGroups`)
                console.log(result.data);
                return (result.data);
            }catch(error){
                return (error,error.log)
            }
        }

const addPlayerGroup = async (attendeeid,groupid) => {
    const data = {'attendeeid':attendeeid,'groupid':groupid};

    

    try {
      const result = await api.post(`/admin/group/addAttendee`,data);
      console.log(result);
      return result
    }
    catch (error){
      console.log(error,error.message);
    }

  }

  const deletePlayerGroup = async (recordid) => {
    try {
        const result = await api.delete(`/admin/group/deleteAttendeeGroup/${recordid}`)
        console.log(result);
        return result;
    }catch (error){
        console.log(error,error.message);
    }

  }



    return {
        getEventGroups,
        updateGroup,
        addGroup,
        deleteGroup,
        addPlayerGroup,
        deletePlayerGroup
        
    }
}