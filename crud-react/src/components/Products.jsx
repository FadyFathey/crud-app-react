import React, { Component } from 'react'
import data from './store'

export default class Products extends Component {
  render() {
    return (
      <>
        <div className="row text-center mt-5 pt-5">
          {  data.map((value)=>
            (
            <div key={value.id} className="col-md-4 mb-5">
            <div className="item">
              <img height='300'  className='w-100' src={value.image} alt="" />
              <div className="cartTitle">
              <h5 className='my-4'>{value.title}</h5>
              <span>${value.price}</span>
              </div>
              <button onClick={ ()=> this.props.retreveData(value)}  className='btn mainColor  text-white w-100'>Add to cart</button>
            </div>
          </div>
          ))}
        </div>
      </>
    )
  }
}
