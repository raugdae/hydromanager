import LabelledCheckbox from '../common/LabelledCheckbox';
import ConfirmButton from '../common/ConfirmButton';
import CancelButton from '../common/CancelButton';

import {useState, useEffect, Fragment} from 'react';


function PlayerAddForm ({onSubmit, onCancel, personList}) {
    const [data,setData] = useState({personid:"",eventid:localStorage.getItem('eventid')})

    const handleSubmit = (e) => {
        return ('');
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
                        <div className='col-start-2 group-hover:bg-zinc-400 flex items-center'><LabelledCheckbox/></div>
                        <div className='col-start-3 group-hover:bg-zinc-400'>{item.firstname}</div>
                        <div className='col-start-4 group-hover:bg-zinc-400'>{item.lastname}</div>
                        </div>
                    </Fragment>
                )
            })}
        </div>
        <div className='flex flex-row justify-around border-t-2 gap-2 p-4'><CancelButton/><ConfirmButton /></div>
    </form>
)
}

export default PlayerAddForm