import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='navbar'>
            <Link to='/' className='tittle'>Blog App</Link>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div >
    )
}

export default Header