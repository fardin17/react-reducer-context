import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const userlist=[{username:'fardin',password:'12343'},{username:'fardin',password:'12343'},{username:'fardin',password:'12343'}]

const About = () => {
    const navigate =useNavigate()
    const [counter, setCounter]=useState(0)
    const [user, setUser]= useState({username:'',password:''})
    useEffect(()=>{
        counter===5 && navigate('/contact')
        user ?  navigate('/dashboard'):navigate('/auth/login')

    },[user])
  return (
    <div> <h1>About</h1>
    <h3 onClick={()=>setCounter(prev=>prev+1)}>Counter</h3>
    <h3>{counter}</h3>
    </div>
   
  )
}

export default About