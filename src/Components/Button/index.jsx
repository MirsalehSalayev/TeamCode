import React from 'react'
import "./_button.scss"

const Button = ({ title, color }) => {
    return (
        <button color={color}>{title}</button>
    )
}

export default Button