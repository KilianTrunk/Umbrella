import * as React from "react";
import "../css/styles.css";
import { Row, Col } from "react-flexbox-grid";
import { SectionItem } from "../components/SectionItem";
import { useContext } from "react";
import { Context } from "../global-state/Store";

const KontaktComponent = () => {
  const [state, setState] = useContext(Context);

  const kontaktItems = state.Kontakt;

  return (
    <>
      {kontaktItems && (
        <>
          <Row center="xs" className="navbar-section">
            <Col xs={11} lg={2}>
              {kontaktItems.map((kontaktItem, index) => {
                return (
                  <>
                    <Row className="zalety-item-container">
                      <SectionItem sectionItem={kontaktItem} key={index} />
                    </Row>
                  </>
                );
              })}
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default KontaktComponent;
