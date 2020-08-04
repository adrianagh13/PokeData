import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal(props){
    if(!props.isOpen){
        return null
    }

    return(
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__container">
                    <h1>PokeDetails</h1>
                    <div className="Details__container">
                        <p>{props.details && props.details.name}</p>
                        <p>N°{props.details && props.details.id}</p>
                        <p>Experience: {props.details && props.details.base_experience}</p>
                        <p>Height: {props.details && props.details.height}</p>
                        
                    </div>
                    <button className="Modal__button" onClick={props.onClose}>X</button>
                    {props.children}
                </div>
            </div>
            , document.getElementById('modal')
        )
    )
}

export default Modal