
import React from "react";
import mainBackground from '../images/MainBackground_jess-unleashed.jpg'
import '../styles/home.css'

function Home() {
    const inline = {
        backgroundImage:"url(" + {mainBackground} + ") no-repeat center center fixed",
        backgroundSize: "cover"
    }

    return (
        <div style={inline}>
            
        </div>
    )
}

export default Home