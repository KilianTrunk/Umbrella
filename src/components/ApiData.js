import * as React from "react";

import { useEffect, useState } from "react";

export const ApiData = () => {
    const [data, setData] = useState({});

    useEffect(() => {
      fetch("http://localhost:1337/api/umbrellas?populate=*")
        .then((results) => results.json())
        .then((data) => {
          if (data && data.data) {
            setData(data.data[0].attributes);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    if (data.Home) {
      console.log(data);
      return data;
    }
};