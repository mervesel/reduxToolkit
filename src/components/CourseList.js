import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
  return (
    <>
      <section className="cart">
        <header>
          <h2>Sepetim</h2>
        </header>
        <div>
          {cartItems.map((item)=>{
            return <CourseItem key={item.id} {...item} />
          })}
        </div>
      </section>

      <footer>
        <hr />
        <div className="">
          <h4>Toplam Tutar <span>{total} TL </span></h4>
        </div>
        <button className="cartClearButton">
          Temizle
        </button>
      </footer>
    </>
  );
};

export default CourseList;
