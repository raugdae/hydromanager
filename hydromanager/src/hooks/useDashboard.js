import api from "../api/axios";

export const useDashboard = () =>{

    const getDashboardData = async () => {

        const eventid = localStorage.getItem('eventid');

        const result = await api.get(`/admin/event/${eventid}/dashboard`)
        return result.data;
    }


    return {getDashboardData}
}