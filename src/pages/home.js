import * as React from "react";
import "../css/styles.css";
import { Row, Col } from "react-flexbox-grid";
import { useContext } from "react";
import { Context } from "../global-state/Store";

const HomePage = () => {
  const [state, setState] = useContext(Context);

  const homeItems = state.Home;

  return (
    <>
      {homeItems && (
        <>
          <Row center="xs" className="home-section">
            <Col xs={8} lg={6} className="vertical-center home-section-line">
              <p className="home-section-header">{homeItems.header}</p>
            </Col>
            <Col xs={8} lg={6} className="vertical-center">
              <Row center="xs">
                <Col lg={8}>
                  <p className="home-section-subheader">
                    {homeItems.subheader}
                  </p>
                  <p className="home-section-description">
                    {homeItems.description}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default HomePage;
