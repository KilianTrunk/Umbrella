import * as React from "react";
import "../css/styles.css";
import { Row } from "react-flexbox-grid";
import GaleriaShowcase from "../components/GaleriaShowcase";
import Store from "../global-state/Store";
import { Layout } from "../components/Layout";

const Galeria = () => {
  return (
    <Store>
      <Layout>
        <Row center="xs" className="navbar-section">
          <GaleriaShowcase />
        </Row>
      </Layout>
    </Store>
  );
};

export default Galeria;
