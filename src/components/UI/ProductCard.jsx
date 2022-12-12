import React from "react";

import productImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/product-card.css";

const ProductCard = () => {
  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={productImg}
            alt="product"
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to="/shop/id">Modern Armchair</Link>
          </h3>
          <span>Chair</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">$299</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
