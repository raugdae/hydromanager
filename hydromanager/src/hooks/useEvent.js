//import {useState,useEffect} from 'react';
import api from '../api/axios'

export const useEvent = () =>{     

    

    const fetchEventList = async () =>{
        try{
        const result =  await api.get("/admin/allEvents")

        return result.data.data
        }
        catch(err){
            console.log(err.status,err.message);
        }
    }
    const fetchEventGroups = async (eventid) =>{
        if (!eventid) return '';
        try{
            
            const result = await api.get(`/admin/event/${eventid}/getGroups`)
            return result.data;
        }
        catch(err){
            console.log(err.status,err.message);
        }
    }
    const fetchEventShopKey = async (eventid) => {
        try {
            const result = await api.get(`/admin/event/${eventid}/getShopKey`)
            return result
        }
        catch (err){
            console.log(err.status,err.message)
        }
    }
    

    return {
        fetchEventList,
        fetchEventGroups,
        fetchEventShopKey
    }

}