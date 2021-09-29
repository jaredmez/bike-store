import React from "react";
import bikeIcon from '../images/bike_icon_yellow.png'
import '../styles/header.css'
import search from '../images/search.png'

function Header() {
    return (
        <header>
        <div className="main-nav">
            <div className="bike-logo-bttn">
                <a href="/">
                    <img src={bikeIcon} alt="bike-icon" />
                </a>
            </div>
            <div className="search-ctn">
                <input id="search" type="text" />
                <img id="search-icon" src={search} alt="search-icon"/>
            </div>
            <a href="/shop">
                <div className="shop-bttn">SHOP</div>
            </a>
        </div>

      </header>
    )
}

export default Header