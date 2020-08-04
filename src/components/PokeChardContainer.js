import React from 'react'

import PokeChard from './PokeChard'

class PokeChardContainer extends React.Component{
    state = {
        loading: true,
        error: null,
        data: {},
        images: " ",
        modalIsOpen: false,
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false})
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true})
    }

    componentDidMount(){
        this.fetchPokemon()
    }

    fetchPokemon = async () => {

        this.setState({loading: true, error: null})

        try {
            const response = await fetch(this.props.pokemon.url)
            const data = await response.json()
            
            this.setState({ 
                loading: false, 
                error: null,
                data: [].concat(this.state.data, data),
                images : Object.values(data.sprites),
            })

            // const images = Object.values(data.sprites) convertir objeto a arreglo
            // console.log(this.state.data) tenia 2 posiciones, la 2 es donde estan los datos
            // console.log(this.state.images[4])            
            console.log(this.state.data[1])
            // console.log(this.state.data[1].name) //nombre

        } catch (error) {
            this.setState({ loading: false, error: true})
        }   
    }
    
    render(){
        if(this.state.error){
            return 'Mistakeee'
        }  

        return (
            <div>
                <PokeChard 
                    details={this.state.data[1]} 
                    image={this.state.images[4]}
                    onCloseModal={this.handleCloseModal}
                    onOpenModal={this.handleOpenModal}
                    modalIsOpen={this.state.modalIsOpen}
                />
            </div>
        )
    }
}

export default PokeChardContainer