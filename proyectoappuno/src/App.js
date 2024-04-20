import React, {Component} from 'react';
import './App.css';
import Buscador from './components/Buscador';


class App extends Component {
  state = {
    comentario: ""
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
          <p className="lead text-center">A continucación escribe tu comentario</p>
          <Buscador datosBusqueda={this.datosBusqueda} className="Buscador" />
        </div>
        
        {this.state.comentario}
      </div>
    );
  }
}

export default App;
