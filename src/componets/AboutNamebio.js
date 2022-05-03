import React from "react";
import "./AboutNamebio.css"
import ScrollDown from "./scrolldown.png"
const AboutNameBio= ()=>{
    return(
        <div className="main-cointaner-About-item">
            
            <section className="main-cointaner-About-item-Name">
                <h1 id="FirstH1">HI,</h1>
                <h1>I'm Andrei</h1>
                <h1 id="thirdH1">Frontend Dev</h1>
                <p className="main-cointaner-About-item-text">self-taught frontend developer</p>
                <a href=""><button className="button-85" role="button">CONTACT ME!</button></a>
            </section>
            <span className="Scroll-Down-left">Scroll Down</span>
        </div>
    )
}

export default AboutNameBio;