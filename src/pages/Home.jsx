import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { motion } from "framer-motion";

import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
import { Link } from "react-router-dom";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSalesProduct, setBestSalesProduct] = useState([]);
  const [mobileProduct, setMobileProduct] = useState([]);
  const [wirelessProduct, setWirelessProduct] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filtredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filtredBestSalesProduct = products.filter(
      (item) => item.category === "sofa"
    );

    const filtredMobileProduct = products.filter(
      (item) => item.category === "mobile"
    );

    const filtredWirelessProduct = products.filter(
      (item) => item.category === "wireless"
    );

    setTrendingProduct(filtredTrendingProducts);
    setBestSalesProduct(filtredBestSalesProduct);
    setMobileProduct(filtredMobileProduct);
    setWirelessProduct(filtredWirelessProduct);
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
            <ProductsList data={trendingProduct} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>

            <ProductsList data={bestSalesProduct} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="counter" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProduct} />
            <ProductsList data={wirelessProduct} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
