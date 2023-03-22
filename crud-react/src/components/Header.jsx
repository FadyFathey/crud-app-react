import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark mainColor py-3">
      <a className="navbar-brand"  href="#">Shoping App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
        
          <li className="nav-item cart position-relative ">
            <span>${this.props.totalPrice.toFixed(2)}</span>
            <span>Cart <i className="fa-solid fa-cart-shopping"></i></span>
            <span className='badge badge-info p-2 cartBadge '> {this.props.totalQty}</span>
          </li>
       
        </ul> 
      
      </div>
    </nav>
    </div>
    )
  }
}
