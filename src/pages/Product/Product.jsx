import React from "react";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.css";

const Product = () => {
  const [selectedImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/3062593/pexels-photo-3062593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5560329/pexels-photo-5560329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$19.9</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          sunt, quod obcaecati delectus fugit tempora veniam autem voluptatibus
          aliquid ad fugiat dolor temporibus laboriosam inventore! Dolor aut
          molestiae animi nemo!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <ShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WIST LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
