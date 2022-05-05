import React, {useRef, useState} from "react";
import "./HeadBar.css"
import { Link } from "react-scroll";

const HeadBar = ()=>{
 
    const [changeclass , setChangeClass] = useState(true)

    return(
        <div>
            <header>
                <a href="/" className="Logo-item-a"><p className="Logo-item-Text">andreimorosan.com</p></a>
                    <nav>
                        <ul className="desktop-menu">
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="skills-aboutme"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>
                                        SKILLS
                                    </Link>
                            </li>
                            <li>PROJECTS</li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}>
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div id="hamburger-icon" className={changeclass ? "hidden" : "open"} onClick={()=> setChangeClass(!changeclass)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
            </header>
            <ul className={changeclass ? "hidden" : "mobile-menu"}>
                <li>
                <Link
                    activeClass="active"
                    to="skills-aboutme"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}>
                    SKILLS
                </Link>
                </li>
                <li>PROJECTS</li>
                <li>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}>
                    CONTACT
                </Link>
                </li>
            </ul>
        </div> 
    )
}


export default HeadBar;