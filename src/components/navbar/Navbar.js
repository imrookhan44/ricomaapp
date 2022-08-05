import React from 'react'
import './../../styles/Navbar.css'
import logo from './../../images/logo.svg'
function Navbar(props) {
    return (
        <div>
            <header>
                <div className="brand-logo">
                    <a href="#"><img src={logo} alt="Brand Logo" /></a>
                </div>
                <input type="checkbox" id="toggle-btn" />
                <label htmlFor="toggle-btn" className="show-menu-btn"><i className="fas fa-bars" /></label>
                <nav>
                    <ul className="navigation">
                        <li>
                            <img src={props.homeIcon} alt="" />

                            <a href="#"> Home</a></li>
                        <li>  <img src={props.productIcon} alt="" /><a href="#"> Products</a></li>
                        <li>  <img src={props.groupIcon} alt="" /><a href="#">about</a></li>

                        <div className="navimage">
                            <img src={props.navIcon} alt="" srcset="" />

                        </div>
                        <label htmlFor="toggle-btn" className="hide-menu-btn"><i className="fas fa-times" /></label>
                    </ul>
                    <button><i class="fa fa-shopping-cart fa-2x"></i><span>2</span></button>
                </nav>


            </header>

        </div>
    )
}

export default Navbar
