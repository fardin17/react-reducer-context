
import { Link, useNavigate, } from 'react-router-dom'

const NavLink = () => {
    const navigate=useNavigate()
  return (
    <div>
        <Link to={'/'}>Homepage</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/skill'}>Skills</Link>
        <button onClick={
          ()=>{
          localStorage.removeItem('user');
          navigate('/auth/login')
          }}
          >Logout</button>
</div>
  )
}

export default NavLink