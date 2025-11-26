import {Link} from 'react-router-dom';

function LinkMainMenu({target,name}){
    return(<>
        <Link to={target} className='flex hover:cursor-pointer hover:text-green-800 hover:bg-emerald-400 bg-emerald-800 text-green-400 font-bold px-4'>{name}</Link>
        </>
    )
    
}
export default LinkMainMenu