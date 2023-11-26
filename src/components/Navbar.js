import React from "react";
import { useSelector } from "react-redux";
import {BsFillBasketFill} from 'react-icons/bs';

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);
  // console.log(useSelector((store)=>store.cart));
//   console.log(quantity);
  return (
    <div className="navbar">
        <h3>Kurs Uygulaması</h3>
        <div className="navDiv">
            <div className="itemDiv">
                <p>{quantity}</p>
            </div>
            <BsFillBasketFill className="itemIcon" />
        </div>
    </div>
  );
};

export default Navbar;
