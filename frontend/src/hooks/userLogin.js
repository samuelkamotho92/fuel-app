import React,{useState} from "react";
import { useAuthContext } from "./consumeContext";
import {useNavigate} from 'react-router-dom'

export const UserSignIn = ()=>{
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const navigate = useNavigate();
    const signIn = async(email,password)=>{
setError(null);
setLoading(true);
const url =  `http://localhost:5000/api/v1/user/login`;
const resp = await fetch(url,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({email,password}),
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
    //set the token and useron frontend
    localStorage.setItem('user',JSON.stringify(data));
    dispatch({type:'LOGIN',payload:data});
setLoading(false);
navigate('/')
}
    }
    return {signIn,loading,error}
}
