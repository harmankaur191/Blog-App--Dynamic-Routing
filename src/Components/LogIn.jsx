import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export default function LogIn(){
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = ()=>{
        login();
        navigate('/admin',{replace:true});
    };
    return(
            <button type ='button' id='logInBtn' onClick={login}>Log In</button>
     
    )
}