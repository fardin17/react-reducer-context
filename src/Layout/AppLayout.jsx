
import { useEffect } from 'react'
import NavLink from '../component/NavLink'
import { Outlet, useNavigate } from 'react-router-dom'
import { getUser } from '../helper/hooks/getUser'
import Header from '../component/Header'


const AppLayout = () => {
  const user =getUser()
  const navigate=useNavigate()
  useEffect(()=>{
    if(!!user && !user?.username)
    navigate('/auth/login')
},[user])
  return (
    <div className="relative bg-black w-full">
       <Header/>
      <div className="pt-28 bg-red-500"><NavLink/><Outlet/></div>  
    </div>
  )
}

export default AppLayout