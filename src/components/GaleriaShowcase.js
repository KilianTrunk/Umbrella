import * as React from "react";

import "../css/styles.css";

import { Row, Col } from "react-flexbox-grid";

import Img1 from "../img/1.jpg";
import Img2 from "../img/2.jpg";
import Img3 from "../img/3.jpg";
import Img4 from "../img/4.jpg";
import Img5 from "../img/5.jpg";
import Img6 from "../img/6.jpg";
import Img7 from "../img/7.jpg";
import Img8 from "../img/8.jpg";
import Img9 from "../img/9.jpg";

const GaleriaShowcase = () => {
  return (
    <>
      <Row>
        <a href="../img/1.jpg">
          <Col lg={4}>
            <img src={Img1} alt="umbrella-img" className="galeria-img" />
          </Col>
        </a>
        <a href="../img/2.jpg">
          <Col lg={4}>
            <img src={Img2} alt="umbrella-img" className="galeria-img" />
          </Col>
        </a>
        <a href="../img/3.jpg">
          <Col lg={4}>
            <img src={Img3} alt="umbrella-img" className="galeria-img" />
          </Col>
        </a>
      </Row>
      <Row>
        <a href="../img/4.jpg">
          <Col lg={4}>
            <img src={Img4} alt="umbrella-img" className="galeria-img" />
          </Col>
        </a>
        <a href="../img/5.jpg">
          <Col lg={4}>
            <img src={Img5} alt="umbrella-img" className="galeria-img" />
          </Col>
        </a>
        <a href="../img/6.jpg">
          <Col lg={4}>
            <img src={Img6} alt="umbrella-img" className="galeria-img" />
          </Col>
        </a>
      </Row>
      <Row>
        <a href="../img/7.jpg">
          <Col lg={4}>
            <img src={Img7} alt="umbrella-img" className="galeria-img" />
          </Col>
        </a>
        <a href="../img/8.jpg">
          <Col lg={4}>
            <img src={Img8} alt="umbrella-img" className="galeria-img" />
          </Col>
        </a>
        <a href="../img/9.jpg">
          <Col lg={4}>
            <img src={Img9} alt="umbrella-img" className="galeria-img" />
          </Col>
        </a>
      </Row>
    </>
  );
};

export default GaleriaShowcase;
