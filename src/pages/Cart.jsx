import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Helmet title="Cart">
      <CommonSection title="Shoping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No items added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((items, index) => (
                      <tr key={index}>
                        <td>
                          <img src={items.imgUrl} alt="image" />
                        </td>
                        <td>{items.productName}</td>
                        <td>$ {items.price}</td>
                        <td>{items.quantity}px</td>
                        <td>
                          <motion.i
                            whileTap={{ scale: 1.1 }}
                            className="ri-delete-bin-line"
                          ></motion.i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="9"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
