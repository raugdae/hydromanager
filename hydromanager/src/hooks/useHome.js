import {useEffect } from 'react';
import {useAuth} from '../hooks/useAuth';
import {useNavigate} from 'react-router-dom';

export const useHome = () => {
    const {isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated()){
            navigate('/login');
        }
    },[isAuthenticated, navigate]);




    return {
        isAuthenticated:isAuthenticated()
    };
}