
import React from "react";
import mainBackground from '../images/MainBackground_jess-unleashed.jpg'
import '../styles/home.css'

function Home() {


    return (
        <div className="home-ctn">
            <img className="background-img" src={mainBackground}/>
            <h1 className="home-title">PEACHTREE CYCLERY</h1>
            <h3>DISTRIBUTOR OF BIKES AND MORE... CHECK US OUT.</h3>
        </div>
    )
}

export default Home