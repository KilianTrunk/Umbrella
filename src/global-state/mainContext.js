import React, { createContext } from "react";

const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_API_DATA":
      return {
        APIdata: [action.payload, ...state.APIdata],
      };
    default:
      return state;
  }
};

const initialState = { APIdata: {} };

export const GlobalContext = createContext(initialState);

const APIDataProvider = ({children }) => {
  const [state, dispatch] = React.useReducer(initialState);

  function fetchAPIdata(APIdata) {
    fetch("http://localhost:1337/api/umbrellas?populate=*")
      .then((results) => results.json())
      .then((data) => {
        if (data && data.data) {
          dispatch({
            type: "SET_API_DATA",
            payload: data.data[0].attributes,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <GlobalContext.Provider
      value={{
        APIdata: state.APIdata,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useAPIData() {
  const context = React.useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export default { APIDataProvider, useAPIData };
