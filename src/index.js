import React from 'react';
import ReactDOM from 'react-dom'

import Loader from './components/Loader'
import PokeChardContainer from './components/PokeChardContainer'

import Logo from './images/logo.png'
import './styles/index.css'

class Pokemon extends React.Component{
  state = {
    loading: true,
    error: null,
    data: {
      results : []
    },
    offset : 0, 
    url : " ",
  }

  componentDidMount(){
    this.fetchPokemons()
  }

  fetchPokemons = async () => {
    this.setState({ loading: true, error: null})

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${this.state.offset}&limit=20`)
      const data = await response.json()

      this.setState({ 
        loading: false, 
        data: {
          results : [].concat(this.state.data.results, data.results)
        },
        offset : this.state.offset + 20,
      })
      console.log(data)

    } catch (error) {
      this.setState({ loading: false, error: true})
    }
  }

  render(){
    if(this.state.error){
      return 'Error'
    }

    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={Logo} alt="Logo"/>

          <ul className="row">
            {this.state.data.results.map( pokemon => (
              <li className="col-6 col-md-3" key={pokemon.name}> 
                <PokeChardContainer pokemon={pokemon} />
              </li>
            ))}
          </ul>
          <div className="Loader__container">
            {this.state.loading && <Loader />}
          </div>

          {!this.state.loading && (
            <button onClick={ () => this.fetchPokemons()} className="LoadMore"> Load More Pokemon </button>
          )} 
        </div>
      </div>
    )
    
  }


}

const rootElement = document.getElementById('root')
ReactDOM.render(<Pokemon />, rootElement)

//el prop key es importante utilizarlo al renderizar una lista de componentes, pues así cada uno adquiere su identidad