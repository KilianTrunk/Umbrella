import * as React from "react";

import { Col } from "react-flexbox-grid";

import MaterialImage from "../img/material.jpg";

export const MaterialItem = () => {
  return (
    <Col xs={12} lg={2} className="zalety-item-container">
      <img src={MaterialImage} alt="material-img" className="zalety-material" />
    </Col>
  );
};
