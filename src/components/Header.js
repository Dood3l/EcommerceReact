import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
        <div className="navbar">
            <div id="logo">
                <Link to="/"><img src="assets/images/logo.png" style={{width: "125px"}}alt="logo"/></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Cart" style={{display:"flex"}} className="cart-btn"><img src="assets/images/cart.png" style={{width: "35px"}}alt="cartImg"/></Link></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header