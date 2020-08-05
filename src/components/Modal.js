import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'
import Female from '../images/female.png'
import Male from '../images/male.png'

function Modal(props){
    if(!props.isOpen){
        return null
    }
    return(
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__container">
                    <h1>{props.details && props.details.name}</h1>
                    <ul className="Details__container">
                        <div className="left">
                            <li className="Detail">Id N°: {props.details && props.details.id}</li>
                            <li className="Detail">Experience: {props.details && props.details.base_experience}</li>
                            <li className="Detail">Height: {props.details && props.details.height}</li>
                        </div>
                        <div className="right">
                            <li className="Detail">Weight:{props.details && props.details.weight}</li>
                            <li>Sex:</li>
                            <img src={Male} alt="Male"/>
                            {props.female != null && (
                                <img src={Female} alt="Female"/>
                            )}
                            
                        </div>
                    </ul>
                    <button className="Modal__button" onClick={props.onClose}>X</button>
                    {props.children}
                </div>
            </div>
            , document.getElementById('modal')
        )
    )
}

export default Modal