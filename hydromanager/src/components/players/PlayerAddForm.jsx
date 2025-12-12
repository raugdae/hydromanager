import LabelledCheckbox from '../common/LabelledCheckbox';
import ConfirmButton from '../common/ConfirmButton';
import CancelButton from '../common/CancelButton';

import {useState, useEffect, Fragment} from 'react';
import {useAttendee} from '../../hooks/useAttendee';


function PlayerAddForm ({onCancel, personList}) {
    const [data,setData] = useState([])

    const {addPlayer} = useAttendee();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(data);
        onCancel();
    }

    useEffect(() => {
        console.log(data);
    },[data])

    const handleCheckBoxChange = (e) => {
        
        if(e.target.checked){
            
        setData([...data,{personid:e.target.id,eventid:localStorage.getItem('eventid')}]);
        }
        if(!e.target.checked){
            setData(data.filter(line => line.personid !== e.target.id))

        }

        
    }


    return (
    <form onSubmit={handleSubmit} className='flex flex-col flex-1 w-full h-full bg-zinc-300'>
        <div className='min-h-0 grid grid-cols-[1fr_1fr_2fr_2fr_1fr] items-center p-4'>
            <div className='col-start-2 font-semibold'>
                Ajouter
            </div>
            <div className='col-start-3 font-semibold'>
                Prénom
            </div>
            <div className='col-start-4 font-semibold'>
                Nom
            </div>
            <div className='border-b-2 col-span-5'></div>

        </div>
        <div className='flex-1 min-h-0 overflow-y-auto grid grid-cols-[1fr_1fr_2fr_2fr_1fr] items-stretch content-start p-4'>
            {personList.map((item) => {
                return (
                    <Fragment key={item.id}>
                        <div className='group contents'>
                        <div className='col-start-2 group-hover:bg-zinc-400 flex items-center'><input type='checkbox' id={item.id} name={item.firstname} onClick={e => handleCheckBoxChange(e)}></input></div>
                        <div className='col-start-3 group-hover:bg-zinc-400'>{item.firstname}</div>
                        <div className='col-start-4 group-hover:bg-zinc-400'>{item.lastname}</div>
                        </div>
                    </Fragment>
                )
            })}
        </div>
        <div className='flex flex-row justify-around border-t-2 gap-2 p-4'><CancelButton onClick={onCancel}/><ConfirmButton submit/></div>
    </form>
)
}

export default PlayerAddForm