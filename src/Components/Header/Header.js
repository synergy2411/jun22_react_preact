import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/expenses">Expenses</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/authors">Authors</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/hooks">Hooks</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
