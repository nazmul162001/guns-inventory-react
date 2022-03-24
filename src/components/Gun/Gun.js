import React from 'react';
import './Gun.css';


const Gun = (props) => {
  // console.log(props);
  const {name, id, capacity, price, img, bullet,category, action} = props.gun;
  // handleClick destructuring
  const {handleClick, gun} = props;
  return (
    <div className='gun-container position-relative'>
      <img src= {img} alt="" />
      <h3>{name}</h3>
      <p>Bullet Type: {bullet} </p>
      <p>Capacity: {capacity} </p>
      <p>Action: {action} </p>

      <button onClick={ () => handleClick(gun)} style={{width: '100%'}} className='btn-style btn btn-danger position-absolute '>Add to Cart</button>
    </div>
  );
};

export default Gun;