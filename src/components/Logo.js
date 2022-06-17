import * as React from "react";

import { Col } from "react-flexbox-grid";

import LogoImage from "../img/logo.svg";

export const Logo = () => (
  <Col xs={12} lg={2} className="vertical-center navbar-section-container">
    <a href="/" className="navbar-section-item">
      <img src={LogoImage} alt="logo" className="navbar-section-logo"/>
    </a>
  </Col>
);
