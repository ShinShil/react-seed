import React from 'react';
import {NavLink} from 'react-router-dom';
import {navbar, link as classLink, active} from './Navigation.module.scss';

const links = [
    {to: '/', label: 'Home', exact: true},
    {to: '/About', label: 'About', exact: false},
    {to: '/Rooms', label: 'Rooms', exact: false},
];

export function Navigation() {
    return (
        <nav className={navbar}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            exact={link.exact}
                            activeClassName={active}
                            className={classLink}
                            to={link.to}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;
