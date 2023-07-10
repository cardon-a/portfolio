import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <NavLink to="/" className='homeLink'><p className='cHeader'>C</p><p className='animHeader'>web<br/>designer</p><p className='aHeader'>A</p></NavLink>
            <nav>
                <NavLink to="/cv" className='link'>CV</NavLink>
                <NavLink to="/projects" className='link'>Projets</NavLink>
                <NavLink to="/about" className='link'>À propos</NavLink>
            </nav>
        </header>
    )
}

export default Header