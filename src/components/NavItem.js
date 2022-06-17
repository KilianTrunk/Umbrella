import * as React from "react";
import { Col } from "react-flexbox-grid";

export const NavItem = ({ navItem }) => {
  return (
    <Col xs={12} lg={2} className="vertical-center navbar-section-container">
      <a href={navItem.href} className="navbar-section-item">
        {navItem.title}
      </a>
    </Col>
  );
};