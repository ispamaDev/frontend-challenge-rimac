import React from 'react'
import "./steps.css"
const Index = ({ steps, currentStep }) => {
    return (
        <div className="steps-container">
            {steps.map((step, index) => (
                <div key={index} className={`step ${currentStep === index + 1 ? 'active' : ''}`}>
                    <div className="step-number">{index + 1}</div>
                    <div className="step-label">{step?.title}</div>
                    {index < steps.length - 1 && <div className="step-divider">---</div>}
                </div>
            ))}
        </div>
    )
}

export default Index