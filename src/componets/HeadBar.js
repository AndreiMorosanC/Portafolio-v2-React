import React, {useRef, useState} from "react";
import "./HeadBar.css"

const HeadBar = ()=>{
 
    const [changeclass , setChangeClass] = useState(true)

    return(
        <div>
            <header>
                <a href="/" className="Logo-item-a"><p className="Logo-item-Text">andreimorosan.com</p></a>
                    <nav>
                        <ul className="desktop-menu">
                            <li><a href="/Skills">Skills</a></li>
                            <li><a href="/Proyects">Proyects</a></li>
                            <li><a href="/Contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div id="hamburger-icon" className={changeclass ? "hidden" : "open"} onClick={()=> setChangeClass(!changeclass)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
            </header>
            <ul className={changeclass ? "hidden" : "mobile-menu"}>
                <li><a href="/Skills">Skills</a></li>
                <li><a href="/Proyects">Proyects</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div> 
    )
}


export default HeadBar;