import { useContext } from 'react';
import { ManagerContext } from '../contexts/ManagerContext';

export function useManager() {
    const context = useContext(ManagerContext);
    if (!context) {
        throw new Error('useManager doit être utilisé dans un ManagerProvider');
    }
    return context;
}