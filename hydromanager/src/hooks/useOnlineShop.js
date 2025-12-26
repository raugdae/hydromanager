import api from '../api/axios'
import {useEvent} from './useEvent';

export const useOnlineShop = () => {

    const {fetchEventShopKey} = useEvent();

    const queryInfomaniakShop = async (orderNumber) => {

        const eventid = localStorage.getItem('eventid')

        try {
        
        const responseApiKey = await fetchEventShopKey(eventid);
        console.log(responseApiKey);
        
        const apiKey =  responseApiKey.data.apiKey;

        const bodyData = {ordernumber:orderNumber,apikey:apiKey}

        const responseOrder = await api.put(`/admin/event/${eventid}/updateInfomaniakTicketing`,bodyData)
        
        console.log("response",responseOrder);
        return (responseOrder.data.tickets);

        }
        catch (error){
            console.log(error,error.message);
        }
    }

    

    return {queryInfomaniakShop}

}