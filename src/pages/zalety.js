import React from "react";
import "../css/styles.css";
import Store from "../global-state/Store";
import { Layout } from "../components/Layout";
import ZaletyComponent from '../components/ZaletyComponent'

const Zalety = () => {
  return (
    <Store>
      <Layout>
        <ZaletyComponent/>
      </Layout>
    </Store>
  );
};

export default Zalety;
