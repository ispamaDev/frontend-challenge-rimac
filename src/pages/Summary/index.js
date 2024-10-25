import React from 'react'
import Container from "../../components/Container"
import { ReactComponent as IconFamily } from "../../assets/icons/iconFamily.svg"
import "./summary.css"
import { useUser } from '../../context/UserContext'
const Index = () => {
  const { user } = useUser();
  const { info, responsable, plan } = user
  return (
    <div className='container' >


      <div className="resumen-seguro-container">
        <h1 className="titulo">Resumen del seguro</h1>

        <div className="resumen-tarjeta">
          <p className="subtitulo">PRECIOS CALCULADOS PARA:</p>
          <div className="responsable-info">
            <IconFamily />
            <span className="nombre">{info?.name} {info?.lastName}</span>
          </div>
          <div className='summary__ontainer__info'>
            <div className="info-adicional">
              <h3>Responsable de pago</h3>
              <p>DNI: {responsable?.document}</p>
              <p>Celular: {responsable?.celular}</p>
            </div>
            <div className="plan-elegido">
              <h3>Plan elegido</h3>
              <p>{plan?.title}</p>
              <p>Costo del Plan: {plan?.cost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index