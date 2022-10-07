import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ deleteHandler,product: { id,price, name, img, quantity, shipping } }) => {
  return (
    <div className="order-items">
      <div className="order-img-container">
        <img src={img} alt="" />
      </div>
      <div className="order-content">
        <div className="order-content-text">
          <p>{name}</p>
          <p>
            <small>Price:${price}</small>
          </p>
          <p>
            <small>Quantity:{quantity}</small>
          </p>
          <p>
            <small>Shipping:${shipping}</small>
          </p>
        </div>
        <div>
          <button onClick={()=> deleteHandler(id)}  className="icon-container">
            <FontAwesomeIcon className="icon-btn" icon={faTrashAlt}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
