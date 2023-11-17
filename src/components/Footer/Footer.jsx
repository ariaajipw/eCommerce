import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nisi
            eaque consequuntur, accusamus saepe fugit nostrum inventore dolores
            reprehenderit consectetur odio velit voluptates, hic reiciendis a
            magnam fuga minus quas?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus
            id in quaerat minima corrupti, quas quasi, delectus dicta impedit
            dolorum pariatur, repudiandae soluta eos voluptatum rerum? Ea,
            cupiditate repellendus.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Store</span>
          <span className="copyright">
            c Copyright 2023. All Right Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/midtrans.png" alt="" />
          <img src="/img/gopay.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
