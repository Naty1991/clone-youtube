import React from 'react'
import './Iconos.css'



const iconos = ({Icon, selected, title}) => {

    
    return (
        <div className={`icono_container ${selected && "selected"}`}>
            <Icon className="icono"/>
            <h4 className="titulo">{title}</h4>
        </div>
    )
}

export default iconos
