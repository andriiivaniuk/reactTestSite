import { useState } from "react";
import "./Footer.css";
import phonePic from "./FooterRes/phone-icon.png";
import clockPic from "./FooterRes/clock-icon.png";
import locPic from "./FooterRes/location-icon.png";
import mailPic from "./FooterRes/mail-icon.png";
import buttonPic from "./FooterRes/button-icon.png";

export function Footer (props){

    return (
        <footer className="footer">
            <div className="footer__info-section">
                <li className="info-section__column contacts-column">
                    <span className="column-title">
                        Contacts
                    </span>
                    <span className="column-item">
                        <img src={phonePic} alt="phone-icon" className="column-pic" />
                        0-300-400-200
                    </span>
                    <span className="column-item">
                        <img src={clockPic} alt="clock-picture" className="column-pic"/>
                        Mon-Fri 8AM - 6PM (New-York)
                    </span>
                    <span className="column-item">
                        <img src={locPic} alt="location" className="column-pic"/>
                        Washington Street 13/122, New-York, NY
                    </span>
                    <span className="column-item">
                        <img src={mailPic} alt="mail" className="column-pic"/>
                        real-fruits@mail.com
                    </span>
                </li>
                <li className="info-section__column">
                    <span className="column-title">
                        Useful Links
                    </span>
                    <a href="" className="column-link">Ways to pay and ship</a>
                </li>
                <li className="info-section__column">
                    <span className="column-title">
                        Our Warranty
                    </span>
                    <span>Not happy with your purchase? You can always return it during 30 days since the day of receiving it
                    according to 
                    <a href="" className="our-rules-link"> our rules</a>
                    </span>
                </li>
                <li className="info-section__column">
                    <span className="column-title">
                        Newsletter
                    </span>
                    <span>
                        Subscribe right now!
                    </span>
                    <div className="email-set">
                        <input type="email" className="email-input" defaultValue={"example@example.com"}/>
                        <div className="email-input-but"></div>
                        <img className="email-but" src={buttonPic} alt="" />
                    </div>
                    <div className="newsletter-agreement-set">
                        <input className="newsletter-checkbox" type="checkbox" />
                        <span className="newsletter-agreement-text">
                            I've read and agree with conditions
                        </span>
                    </div>
                </li>
                
            </div>
        </footer>
    )
}

export default Footer;