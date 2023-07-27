import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css';

function Navbar() {
    const [Click] = useState(false);
    const MenuItems = () => Click(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
            HOME
            </Link>
                </div>
                <li className='nav-item'>
                    <Link to='/blog' className='nav-links' onClick={MenuItems}>
                        BLOG
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/merch' className='nav-links' onClick={MenuItems}>
                        MERCH
                    </Link>
                    </li>
            </nav>
        </>
    )
}


export default Navbar