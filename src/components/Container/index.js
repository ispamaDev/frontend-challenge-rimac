import React from 'react'
import "./container.css"
const Index = ({ children, ...props }) => {
  return (
    <div className='container' {...props}>{children}</div>
  )
}

export default Index