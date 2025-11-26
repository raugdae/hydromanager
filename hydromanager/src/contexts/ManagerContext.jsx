
import { createContext, useContext, useState } from 'react';

const ManagerContext = createContext();

export function ManagerProvider({ children }) {
    const [eventName, setEventName] = useState('');
    
    return (
        <ManagerContext.Provider value={{ eventName, setEventName }}>
            {children}
        </ManagerContext.Provider>
    );
}

export function useManager() {
    const context = useContext(ManagerContext);
    if (!context) {
        throw new Error('useManager doit être utilisé dans un ManagerProvider');
    }
    return context;
}