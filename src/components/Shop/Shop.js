import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Shop.css';

const Shop = () => {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);


  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  },[])

  // handle Click 
  const handleClick = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  }

  return (
    <div className='shop-container row'>
      <div className="col-lg-9">
        <div className="guns-container">
          {
            guns.map(gun => <Gun 
            key = {gun.id}
            gun = {gun}
            handleClick = {handleClick}

            />)
          }
        </div>
      </div>
      <div className="col-lg-3">
        <h3>Total Guns: {guns.length}</h3>
        <h4>Order Summery: {cart.length}</h4>
        <p>Name: {cart.name}</p>
      </div>
    </div>
  );
};

export default Shop;