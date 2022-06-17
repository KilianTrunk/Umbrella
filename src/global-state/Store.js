import React, { useContext, useState, createContext} from 'react';

export const Context = createContext({});

const Store = ({children}) => {
    const [state, setState] = useState({});

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Store;