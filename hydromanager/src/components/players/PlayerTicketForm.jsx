import {useOnlineShop} from '../../hooks/useOnlineShop'
import {useAttendee} from '../../hooks/useAttendee';
import {useState,useEffect} from 'react';

function PlayerTicketForm ({attendeeId}) {

    const [apiKey,setApiKey] = useState([]);
    const {queryInfomaniakShop} = useOnlineShop();
    const {assignTickettoPlayer} = useAttendee();

    useEffect (() => {
        const fetchKey = async () =>{
            const response = await queryInfomaniakShop('70008683');
            setApiKey(response);
        }

        fetchKey();
    }
    ,[])

    const handleAssignTicket = async (e) => {
        e.preventDefault();

        const inputTicket = e.target.ticketNumber.value;
        console.log("sending data");
        await assignTickettoPlayer(attendeeId,inputTicket)



    }
    

    console.log(apiKey)

    return (<div>
        
        <form onSubmit={handleAssignTicket}>
            <input name='ticketNumber' type='text' className='bg-zinc-200'></input>
            <button type='submit'>Enregistrer</button>
        </form>
        {apiKey.map((item) => {return <div>{item.barcode}</div>})}
        
        </div>)

}
export default PlayerTicketForm;