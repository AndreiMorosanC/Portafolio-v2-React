import React from "react";
import "./AboutNamebio.css"
import { Link } from "react-scroll";
const AboutNameBio= ()=>{
    return(
        <div className="main-cointaner-About-item">
            
            <section className="main-cointaner-About-item-Name">
                <h1 id="FirstH1">HI,</h1>
                <h1>I'm Andrei</h1>
                <h1 id="thirdH1">Frontend Dev</h1>
                <p className="main-cointaner-About-item-text">self-taught frontend developer</p>
                <button className="button-85" role="button">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}>
                        CONTACT
                    </Link>
                </button>
            </section>
            <span className="Scroll-Down-left">Scroll Down</span>
        </div>
    )
}

export default AboutNameBio;