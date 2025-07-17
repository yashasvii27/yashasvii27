// serevr and signup files are connected
import { useState } from "react";
import axios from 'axios'

export default function signup()
{
    const[username,setusername]=useState('')
    const hs=async(e)=>{
        e.preventDefault()
        try{
            await axios.post('http://localhost:5000/signup',{username})
            alert('signup done')
            setusername('')
        }
        catch(err){
            alert('error occured')
        }
return(
    <>
    <form onSubmit={hs} method="post">
        user:<input type="text" onChange={(e)=>setusername(e.target.value)}/>
        <button type="submit">Register</button>
    </form>
    </>
)
    }
}
