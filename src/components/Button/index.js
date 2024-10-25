import React from 'react'
import "./button.css"
const Index = ({ children, ...props }) => {
    return (
        <button className='mybutton'  {...props}>{children}</button>
    )
}

export default Index