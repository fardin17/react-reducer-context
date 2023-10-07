
import NavLink from '../component/NavLink'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div><NavLink/><Outlet/></div>
  )
}

export default AppLayout