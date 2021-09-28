import React from "react";
import bikeIcon from '../images/bike_icon_yellow.png'
import '../styles/header.css'
import search from '../images/search.png'

function Header() {
    return (
        <header>
        <div className="main-nav">
            <div className="bike-logo-bttn">
                <img src={bikeIcon} alt="bike-icon" />
            </div>
            <div className="search-ctn">
                <input id="search" type="text" />
                <img id="search-icon" src={search} alt="search-icon"/>
            </div>
            <div className="shop-bttn">SHOP</div>
        </div>

      </header>
    )
}

export default Header