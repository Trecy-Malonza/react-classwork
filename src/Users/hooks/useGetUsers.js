import { getUsers } from "../utils";
import { useEffect, useState } from "react";


export const useGetUsers = () =>{
    const [users, setUsers] = useState([]);
    const [error, serError] = useState('');
    const [loading, setLoading] =useState(false);

    useEffect(()=>{
        const fetchUsers = async () =>{
            try{
                setLoading(true);
                const result = await getUsers();
                console.log({result});
                setUsers(result.users);
                setLoading(false);
            }
            catch (error){
                serError(`Error: ${error.message}`)
                setLoading(false);

            }
        };
        fetchUsers();
    }, []);

    return{users,error,loading}

};