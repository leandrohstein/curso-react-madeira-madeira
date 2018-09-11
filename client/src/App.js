import React, { Component } from 'react';
import { Template } from './Template';

const Line = (props) => (
  <div style={{borderBottom: 'solid 1px gray', width:"30%", height:"9px", float:"left"}} />
)

const TitleSection = (props) => (
  <div>
    <Line/>
    <div style={{width:'40%', float:'left', textAlign:'center'}}>{props.texto1} <strong>{props.texto2}</strong></div>
    <Line/>
  </div>
)

export default class Aula extends Component {

  state = {
    dia : 'Quinta-feira',
    semana : ''
  }

  getInputEvent = (event) => {
    console.log(event)
    this.setState(
      {
        dia : event.target.value,
        semana : this.state.dia
      }
    )
  }

  render() {
    return (
      <div>
        <input onChange={this.getInputEvent} />
        <p>{this.state.dia}</p>
        <p>{this.state.semana}</p>
        <TitleSection texto1="Parte 1" texto2="Parte 2"/>
      </div>
    );
  }
}
