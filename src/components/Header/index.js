import React from 'react'
import LogoRimacRed from "../../assets/logo-rimac.svg";
import "./header.css"
const Index = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <div>
                    <img src={LogoRimacRed} className="logo" alt="Rimac Logo" />
                </div>
                <div className="header__contact">
                    <span>¡Compra por este medio!</span>
                    <a href="tel:(01) 411 6001"> <i className="fa-solid fa-phone"></i> (01) 411 6001</a>
                </div>
            </div>
        </header>
    )
}

export default Index