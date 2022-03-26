import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gun from '../Gun/Gun';
import './Shop.css';

const Shop = () => {
  const [guns, setGuns] = useState([]);
  const [details, setDetails] = useState([])


  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  },[])

  // handle click 
  const handleClick = gun => {
    if(details.find(item => item.id === gun.id)){
      alert('Already Exists')
    }
    else{
      setDetails([...details, gun]);
    }
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
      <div className="col-lg-3 ">
          <div className="right-content">
            <Cart 
            details = {details} 
            guns = {guns}
            setDetails = {setDetails}
            />
          </div>
      </div>
    </div>
  );
};

export default Shop;