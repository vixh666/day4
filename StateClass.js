
import React, { Component } from 'react'

var price=120;
export default class StateClassCom extends Component {
    state={
        color:"yellow",
        price:price //property:value 
    }
    handleChange=()=>{
        this.setState({color:"red"})

    }
    Offer=()=>{
        this.setState({
            price:price--
        })
    }
  render() {
    return (
      <div>
        <h1>the color is {this.state.color} the price is {this.state.price}</h1>
        <button onClick={this.handleChange}>button</button>
        <button onClick={this.Offer}>Offer</button>

      </div>
    )
  }
}