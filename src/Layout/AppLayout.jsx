
import { useEffect } from 'react'
import NavLink from '../component/NavLink'
import { Outlet, useNavigate } from 'react-router-dom'
import { getUser } from '../helper/hooks/getUser'


const AppLayout = () => {
  const user =getUser()
  const navigate=useNavigate()
  useEffect(()=>{
    if(!!user && !user?.username)
    navigate('/auth/login')
},[user])
  return (
    <div><NavLink/><Outlet/></div>
  )
}

export default AppLayout