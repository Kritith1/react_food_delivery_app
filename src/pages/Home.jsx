import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "react-dom";

const Home = () => {
  return <Helmet title="Home">
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'></Col>
        </Row>
      </Container>
    </section>
  </Helmet>;
};

export default Home;
