import React from 'react'
import './footer.css';
import logo from '../../assets/Logo-white.svg';

const Index = () => {
    return (
        <footer className="footer">
            <div className='footer__container'>
                <img src={logo} className="logo" alt="Rimac Logo" />
                <div className='line'/>
                <div className='footer__copyright'>&copy; 2023 RIMAC Seguros y Reaseguros.</div>
            </div>
        </footer>
    )
}

export default Index