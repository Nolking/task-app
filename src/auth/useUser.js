import { useState, useEffect } from 'react';
import { useToken } from './useToken';

export const useUser = () => {
    const [token] = useToken();
    
    // generate a user object from the token with the following shape:
    //  {name: userName, tasks: []}
    const [user, setUser] = useState(() => {  
        if (!token) {
            setUser(null);
        }
        return JSON.parse(localStorage.getItem(token));
    }    
    );
    // const {name, tasks} = user;
    useEffect(() => {
        if (!token) {
            setUser(null);
        } 
        localStorage.setItem(token, JSON.stringify(user));
    }, [user, token]);

    const addTask = (task) => {
        setUser((prevUser) => {
            const newUser = {...prevUser};
            newUser.tasks.push(task);
            localStorage.setItem(token, JSON.stringify(user));
        });
    };


    return [user, addTask];
}