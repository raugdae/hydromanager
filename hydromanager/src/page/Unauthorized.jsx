import {Link} from 'react-router-dom'

function Unauthorized(){
    return (
        <div>
            <h1 className='bg-red-600'>Accès à la page non autorisée</h1>
            <Link to='/' className='hover:bg-blue-400'>Retour à la page d'accueil</Link>


        </div>
    )
}
export default Unauthorized