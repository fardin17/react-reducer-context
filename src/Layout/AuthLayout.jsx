import { useEffect } from "react"
import { getUser } from "../helper/hooks/getUser"
import { Outlet, useNavigate, } from "react-router-dom"
import Header from "../component/Header"

const AuthLayout = () => {
    const user =getUser()
    const navigate=useNavigate()
    useEffect(()=>{
        if(user?.username)navigate('/')
    },[user])
  return (
    <div className="relative bg-black w-full">
       <Header/>
      <div className="pt-24 bg-red-500"><Outlet/></div>  
    </div>
  )
}

export default AuthLayout