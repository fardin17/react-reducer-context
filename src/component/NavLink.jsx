
import { Link, } from 'react-router-dom'

const NavLink = () => {
    
  return (
    <div>
        <Link to={'/'}>Homepage</Link>
       <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/skill'}>Skills</Link>
</div>
  )
}

export default NavLink