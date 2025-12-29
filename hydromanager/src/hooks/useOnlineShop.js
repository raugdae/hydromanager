import api from '../api/axios'
//import {useEvent} from './useEvent';

export const useOnlineShop = () => {

    

    const queryInfomaniakShop = async (orderNumber) => {

        const eventid = localStorage.getItem('eventid')

        try {
    
        const bodyData = {ordernumber:orderNumber}

        const responseOrder = await api.put(`/admin/event/${eventid}/updateInfomaniakTicketing`,bodyData)
        
        return (responseOrder.data.status);

        }
        catch (error){
            console.log(error,error.message);
        }
    }

    const getAttendeeTicket = async (attendeeid) => {
        const eventid = localStorage.getItem('eventid');
        
        try{
        const response = await api.get(`/admin/event/${eventid}/attendee/${attendeeid}/getTicket`)
        return response.data.result
        }
        catch(error){
            console.log(error, error.message)
        }
        

    }

    const getUnassignedTicket = async () => {
        const eventid = localStorage.getItem('eventid');

        try{
            const response = await api.get(`/admin/event/${eventid}/getUnassignedTicket`);
            return response.data.result
        }
        catch (error) {
            console.log(error, error.message);
        }
    }

    const getSurveyFromTicket = async (ticketid) => {
        try {
            const response = await api.get(`admin/event/ticket/${ticketid}/getSurvey`);
            console.log(response);
            return response.data.result;

        }
        catch(error){
            console.log(error,error.message);
        }
    }
    

    return {queryInfomaniakShop,
        getAttendeeTicket,
        getUnassignedTicket,
        getSurveyFromTicket
    }

}