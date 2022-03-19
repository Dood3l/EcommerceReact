import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
        <div className="navbar">
            <div className="logo">
                <Link to="/components/Home"><img src="assets/images/logo.png" alt="logo"/></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/components/Home" className="active">Home</Link></li>
                    <li><Link to="/components/Products">Products</Link></li>
                    <li><Link to="/components/Contact">Contact</Link></li>
                    <li><Link to="/components/Cart" style={{display:"flex"}} className="cart-btn"><img src="assets/images/cart.png" style={{width: "35px"}}alt="cartImg"/></Link></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header