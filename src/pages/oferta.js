import React from "react";
import "../css/styles.css";
import Store from "../global-state/Store";
import { Layout } from "../components/Layout";
import OfertaComponent from '../components/OfertaComponent'

const Oferta = () => {
  return (
    <Store>
      <Layout>
        <OfertaComponent/>
      </Layout>
    </Store>
  );
};

export default Oferta;
