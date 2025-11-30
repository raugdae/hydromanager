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
    

    return {
        updateGroup,
        addGroup,
        deleteGroup
    }
}