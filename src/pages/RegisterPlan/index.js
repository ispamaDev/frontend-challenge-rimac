import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import Steps from "../../components/Steps"
import { useUser } from '../../context/UserContext';

import "./register-plan.css"

const Index = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [{ position: 1, path: '', title: 'Planes y coberturas' }, { position: 2, path: 'summary', title: 'Resumen' }];
    const location = useLocation();
    const navigate = useNavigate();
    const { logout,user } = useUser();

    useEffect(() => {
        const split = location.pathname.split('/')
        const pop = split.pop()
        const pos = steps.find(s => s.path == pop);
        if (undefined == pos) {
            setCurrentStep(1)
        } else
            setCurrentStep(pos.position)
    }, [currentStep, location])
    const handleVolver = () => {
        if (currentStep == 1) {
            const resultado = window.confirm('¿Estás seguro que desea salir? se perderá su sesión');
            if (resultado) {
                logout();
                // console.log('El usuario hizo clic en Aceptar');
            } else {
                console.log('El usuario hizo clic en Cancelar');
            }
        } else
            navigate(-1);
    };

    return (
        <div className='steps'>
            <div className='steps__current'>
                <Steps steps={steps} currentStep={currentStep} />
            </div>
            <div className='container' >
                <button onClick={handleVolver}>Volver</button>
            </div>
            <Outlet />

        </div>
    )
}

export default Index