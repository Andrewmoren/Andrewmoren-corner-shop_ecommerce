import React from "react";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <Helmet title={"Home"}>
      <section className="hero__section"></section>
    </Helmet>
  );
};

export default Home;
