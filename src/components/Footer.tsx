import React from "react";
import './Footer.scss'

// @ts-ignore
import logo from '../images/logo.png'
import {Link} from "gatsby";

const Footer = () => {
    return (
        <footer>
            <img src={logo}/>
            <div className="links">
                <ul>
                    <li><Link to={'/cookies'}>Cookies</Link></li>
                    <li><Link to={'/privacy'}>Privacy</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;