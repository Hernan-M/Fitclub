import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Footer = () => {
  return (
    <div className="Footer" id="Footer">
        <div className="social">
            <a target='_blank' href="https://github.com/Hernan-M"><img src={github} alt="" /></a>
            <a target='_blank' href="https://www.instagram.com/hernanzitos/"><img src={instagram} alt="" /></a>
            <a target='_blank' href="https://www.linkedin.com/in/hernan-santos-0a3747228/"><img src={linkedin} alt="" /></a>
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
        <p>Credits for : ZAINKEEPSCODE on youtube</p>
    </div>
  )
}

export default Footer