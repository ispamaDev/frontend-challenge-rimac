import React from 'react'
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button 
          onClick={() => navigate('/')} >
          Regresar a Inicio
        </button>

    </div>
  )
}

export default Index