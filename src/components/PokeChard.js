import React from 'react'

import Modal from './Modal'

import './styles/PokeChard.css'

function PokeChard(props){
    
    return(
        <div 
            className="PokemonChard" 
            style={{ backgroundImage: `URL(${props.image})`}}
        >
            <button className="Button__name" onClick={props.onOpenModal}>
                {props.details && props.details.name}
            </button>
            <Modal
                details={props.details}
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                female={props.female}
            />
        </div>


    )
}

export default PokeChard