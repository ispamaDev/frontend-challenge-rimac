import React from 'react'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Form from "../../components/Forms/FormHome"

import HeroImg from "../../assets/images/imageHome.jpg"

import "./home.css"
const Index = () => {
  return (
    <div>
      <div className="home">
        <div className='home__container'>
          <div className='home__item'>
            <img src={HeroImg} className="imagen" alt="Hero-img" />
          </div>
          <div className='home__item'>
            <div className="home__form">
              <div className="tag"><span>Seguro Salud Flexible</span>  </div>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index