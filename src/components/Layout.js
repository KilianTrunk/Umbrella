import * as React from "react";
import { useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { Context } from "../global-state/Store";

export const Layout = ({ children }) => {
  const [state, setState] = useContext(Context);

  useEffect(() => {
    fetch("http://localhost:1337/api/umbrellas?populate=*")
      .then((results) => results.json())
      .then((data) => {
        if (data && data.data) {
          setState(data.data[0].attributes);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
