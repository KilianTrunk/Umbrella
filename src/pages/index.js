import * as React from "react";
import { useContext } from "react";
import HomePage from "./home";
import { Layout } from "../components/Layout";
import Store from "../global-state/Store";
import { Context } from "../global-state/Store";

const IndexPage = () => {
  const [state, setState] = useContext(Context);

  console.log(state);

  return (
    <Store>
      <Layout>
        <HomePage />
      </Layout>
    </Store>
  );
};

export default IndexPage;