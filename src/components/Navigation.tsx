import React from 'react'
import {Link} from "gatsby";
import './Navigation.sass'

// @ts-ignore
import logo from '../images/logo.png'

interface NavigationParams {

}

const Navigation = () => {
    return (
        <nav>
            <img src={logo} />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation