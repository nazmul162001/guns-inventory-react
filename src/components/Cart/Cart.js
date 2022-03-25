import React, { useState } from 'react';
import './Cart.css'

const Cart = ({details, guns, setDetails}) => {
  // const [delet, setDelet] = useState([]);

  const deleteCart = (detail) => {
    const withoutDelete = details.filter(item => item.id === detail.id)
    // setDetails([withoutDelete])
    console.log([withoutDelete])
  }

  return (
    <div className='cart-info'>
          <div className="right-content">
          <h3>Total Guns: {guns.length}</h3>
        <h4>Order Summery: {details.length}</h4>
        {
          details.map(detail => {


            return (
              <div className='cart-details' key = {detail.id}>
              <img src={detail.img} alt="" />
              <div className="info">
              <h5 className='px-3'>{detail.name}</h5>
              <h5 className='px-3'>Bullet: {detail.bullet} </h5>
              <button onClick={() => deleteCart(detail)}  className='btn btn-secondary'>Delete</button>
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