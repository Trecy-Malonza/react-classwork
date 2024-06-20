import './index.css';
import { useState } from 'react';
import { login } from './utils';
function Login (){

const[username,setUserName] =useState('');
const[password,setPassword] = useState('');
console.log({username});

const handleLogin = async(event) => {
    event.preventDefault();
    const result = await login({username,password})
    console.log({result});
};


    return (
        <div>
            
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
            <button type = "submit">Login</button>
                <input placeholder = "Enter username" type="text"onChange={(event) => setUserName(event.target.value)} />
                <br/>
                <input placeholder="Enter password" type ="password" onChange={(event) => setPassword(event.target.value)}/>
                <br/>
                
            </form>
        </div>

    )
}
export default Login

