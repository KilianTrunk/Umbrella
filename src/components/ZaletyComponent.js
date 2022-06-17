import React, { useContext } from "react";
import { Row, Col } from "react-flexbox-grid";
import { SectionItem } from "../components/SectionItem";
import { Context } from "../global-state/Store";

const ZaletyComponent = () => {
  const [state, setState] = useContext(Context);

  console.log("state", state);

  const zaletyItems = state?.Benefits;

  console.log(zaletyItems);

  return (
    <>
      {zaletyItems && (
        <Row center="xs" className="navbar-section">
          {zaletyItems.map((zaletyItem, index) => {
            if (index === 0) {
              return (
                <>
                  <Col xs={11} lg={2}>
                    <Row className="zalety-item-container">
                      <SectionItem sectionItem={zaletyItem} key={index} />
                    </Row>
                    <Row className="zalety-item-container zalety-material"></Row>
                  </Col>
                </>
              );
            }
          })}
          <Col xs={11} lg={2}></Col>
          <Col xs={11} lg={2}>
            {zaletyItems.map((zaletyItem, index) => {
              if (index > 0) {
                return (
                  <>
                    <Row className="zalety-item-container">
                      <SectionItem sectionItem={zaletyItem} key={index} />
                    </Row>
                  </>
                );
              }
            })}
          </Col>
        </Row>
      )}
    </>
  );
};

export default ZaletyComponent
