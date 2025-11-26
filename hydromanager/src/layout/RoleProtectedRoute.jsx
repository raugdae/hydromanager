import {Navigate,Outlet} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';

function RoleProtectedRoute({allowedRoles}){

 const {isAuthenticated, hasRole} = useAuth();

 if (!isAuthenticated()){
    return <Navigate to="/login" replace/>;
 }

 if (!hasRole(allowedRoles)){
    return <Navigate to='/unauthorized' replae/>
 }

 return <Outlet />;

}
export default RoleProtectedRoute