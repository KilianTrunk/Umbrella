import React from "react";
import "../css/styles.css";
import Store from "../global-state/Store";
import { Layout } from "../components/Layout";
import KontaktComponent from '../components/KontaktComponent'

const Kontakt = () => {
  return (
    <Store>
      <Layout>
        <KontaktComponent/>
      </Layout>
    </Store>
  );
};

export default Kontakt;
