import {Link} from 'react-router-dom';

function LinkMainMenu({target,name}){
    return(<>
        <Link to={target} className='flex hover:cursor-pointer  font-bold px-4'>{name}</Link>
        </>
    )
    
}
export default LinkMainMenu