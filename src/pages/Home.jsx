import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { motion } from "framer-motion";

import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";

const Home = () => {
  const [data, setData] = useState(products);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filtredProducts = products.filter(
      (item) => item.category === "chair"
    );

    setData(filtredProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year} </p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                  facilis a impedit! Nostrum aperiam itaque ipsum doloribus,
                  alias porro tempore sint quam laborum aliquam delectus ipsa
                  maiores, animi ab aliquid!
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="treding__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Treding Products</h2>
            </Col>
            <ProductsList data={data} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
