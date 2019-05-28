import React, { Component } from 'react';
import Search from '../components/search';
//connect a parte de conectar datos de mi store a cual quier componente que yo quiera, tambien me permite traerme el dispatch
import {connect} from 'react-redux'; 

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit')
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload:{ // por buena practica mandamos un objeto
        query: this.input.value
      }
    })
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

//aqui como estamos conectando nuestro store con este componente podemos traernos el dispatch en la funcion handleSubmit
export default connect()(SearchContainer);
