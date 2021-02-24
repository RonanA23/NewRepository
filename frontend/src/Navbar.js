import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

function Navbar() {
    return (
        <div className='navbar'>
            <h2><PermContactCalendarIcon className='icon'/>Contact Keeper</h2>
            <ul> 
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
