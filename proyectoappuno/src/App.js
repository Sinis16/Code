import React, {Component} from 'react';
import './App.css';
import Buscador from './components/Buscador'
class App extends Component{

  state = {
    comentario : "Rojo"
  } 

  datosBusqueda = (comentario) => {
    this.setState({
      comentario
    })
  }

  render() {
    return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center"> Clasificador de comentarios</p>
        <Buscador datosBusqueda = {this.datosBusqueda}/>
      
      </div>
      {this.state.comentario}
    </div>
  );
}
}

export default App;
