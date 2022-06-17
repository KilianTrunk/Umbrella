import * as React from "react";
import "../css/styles.css";
import { Row, Col } from "react-flexbox-grid";
import { OfertaItem } from "../components/OfertaItem";
import Firmowe from "../img/firmowe.jpg";
import Handlowe from "../img/ogrodowe.jpg";
import Wedkarskie from "../img/wedkarskie.jpg";
import Reklamowe from "../img/ogrodowe5.jpg";
import Nietypowe from "../img/nietypowe.jpg";
import { useContext } from "react";
import { Context } from "../global-state/Store";

const OfertaComponent = () => {
  const [state, setState] = useContext(Context);
  
  const ofertaItems = state.Offers;
  const navigation = state.Navbar;
  return (
    <>
      {ofertaItems && (
        <>
          <Row>
            <Col xs={12} lg={6} className="oferta-img-container">
              <a href={navigation[4].href} className="oferta-link">
                <OfertaItem link={Firmowe} title={ofertaItems[0].Title} />
              </a>
            </Col>

            <Col xs={12} lg={6} className="oferta-img-container">
              <a href={navigation[5].href} className="oferta-link">
                <OfertaItem link={Handlowe} title={ofertaItems[1].Title} />
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4} className="oferta-img-container">
              <a href={navigation[6].href} className="oferta-link">
                <OfertaItem link={Wedkarskie} title={ofertaItems[2].Title} />
              </a>
            </Col>
            <Col xs={12} lg={4} className="oferta-img-container">
              <a href={navigation[7].href} className="oferta-link">
                <OfertaItem link={Reklamowe} title={ofertaItems[3].Title} />
              </a>
            </Col>
            <Col xs={12} lg={4} className="oferta-img-container">
              <a href={navigation[8].href} className="oferta-link">
                <OfertaItem link={Nietypowe} title={ofertaItems[4].Title} />
              </a>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default OfertaComponent;
