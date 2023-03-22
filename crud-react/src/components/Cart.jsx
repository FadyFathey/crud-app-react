import React, { Component } from 'react'

export default class Cart extends Component {
render() {

  return (
    <div>
      <h2 className='cartItems mt-5 pt-5 '>cart items</h2>
      {this.props.cartItems.length===0?<h4>cart is empty</h4>:''}
      {this.props.cartItems.map((value)=>
      {
        return (
        <div key={value.id}>
          <div className='cartItem overflow-hidden  '>
            <div className="cart-img float-left mb-4">
              <img className='w-100' src={value.image} alt="" />
            </div>
            <div className="cart-action float-left">
              <h6>{value.title}</h6>
              <p className='price'>{value.price}</p>
              <button onClick={ ()=> this.props.retreveData(value)} className='btn btn-info'>+</button>
              <span className='px-3'>{value.qty}</span>
              <button onClick={ ()=> this.props.removeItem(value)} className='btn btn-danger'>-</button>
              <button  onClick={ ()=> this.props.removeProduct(value)} className='btn btn-danger '><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
          <hr />
        </div>
        )
      })}
    </div>
  )
}
}
