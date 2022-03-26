import React, { useState } from 'react';
import './Cart.css'

const Cart = ({details, guns, setDetails}) => {

  const deleteCart = (remove) => {
    setDetails(details.filter(item => item.id !== remove.id));
    // console.log(remove.id);
  }

  return (
    <div className='cart-info'>
          <div className="right-content">
          <h3>Total Guns: {guns.length}</h3>
        <h4>Order Summery: {details.length}</h4>
        {
          details.map(remove => {
            // console.log(remove.id);
            return (
              <div className='cart-details' key = {remove.id}>
                <img src={remove.img} alt="" />
                <div className="info">
                  <h5 className='px-3'>{remove.name}</h5>
                  <h5 className='px-3'>Bullet: {remove.bullet} </h5>
                  <button onClick={() => deleteCart(remove)}  className='btn btn-secondary'>Delete</button>
                </div>
              </div>
            )
          })
        }
          </div>
    </div>
  );
};

export default Cart;