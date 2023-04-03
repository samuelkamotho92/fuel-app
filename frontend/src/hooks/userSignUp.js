import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { useAuthContext } from "./consumeContext";

export const UserSignUp = () => {
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(null);
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();
    const signup = async(name,email,password,passwordConfirm)=>{
        setError(null);
        setLoading(true);
        const url = `http://localhost:5000/api/v1/user/register`;
        const resp = await fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,email,password,passwordConfirm}),
            credentials:'include',
            withCredentials:true
        })
        console.log(resp)
     const data = await resp.json();
     console.log(data);
     if(!resp.ok){
        console.log(data.error)
    setError(data.err);
    setLoading(false);
    }
    if(resp.ok){
        console.log('all is fine')
        //set the token and useron frontend
        localStorage.setItem('user',JSON.stringify(data));
        dispatch({type:'LOGIN',payload:data});
    setLoading(false);
    navigate('/')
    }
    }
    return {signup,loading,error}
}

