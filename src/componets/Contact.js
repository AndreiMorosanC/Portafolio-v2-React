import React from "react";
import "./Contact.css"
const Contact =()=>{
    return(
        <div className="Contact-main-container">
            <h2 id="contact-tittle">CONCTACT ME!!!</h2>
            <div className="container-contact">
                
                <div className="container-contact-form-main">
                    
                    <form action="https://formsubmit.co/andreimorosan39@gmail.com" method="POST" className="container-contact-form">
                        <input type="text" name="name" required placeholder="Name....." className="contact-form-input"/>
                        <input type="email" name="email" placeholder="Email..." required className="contact-form-input" />
                        <textarea type="text" name="message" placeholder="Writhe your message here..." rows="6" cols="20" required ></textarea>
                        <button type="submit">Send</button>
                    </form>
                    <div className="container-contact-social-main">
                        <a href="https://www.linkedin.com/in/andrei-morosan-3463a6159/">
                            <div className="container-contact-linkedin">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt=""  className="logo-img" />
                                <p id="linkedin-para">LINKEDIN</p>
                            </div>
                        </a>

                        <a href="https://github.com/AndreiMorosanC">
                            <div className="container-contact-linkedin"   >
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" className="logo-img"/>
                                <p id="linkedin-para"> GITHUB</p>
                            </div>
                        </a>
                    </div>
            </div>
                </div>
                

        </div>
    )
}

export default Contact;