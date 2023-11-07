import React from 'react'
import { Link } from 'react-router-dom'

function AppNavBar() {
    return (
        <div className='nav-container'>
            <div className='nav-brand-name'>
                <h1>SocMed</h1>
            </div>
            <div className='nav-menu'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/login'>Login</Link>
                <Link className='nav-link' to='/register'>Register</Link>
                <Link className='nav-link' to='/messages'>Messages</Link>
                <Link className='nav-link' to='/profile'>Profile</Link>
                <Link className='nav-link' to='/logout'>Logout</Link>
            </div>
        </div>
    )
}

export default AppNavBar
