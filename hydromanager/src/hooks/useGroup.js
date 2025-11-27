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
    

    return {
        updateGroup
    }
}