import React, { createContext } from 'react'

export const GlobalContext = createContext()
// const GlobalContextProvider = (children) => {
const GlobalContextProvider = (props) => {
    <GlobalContext.Provider value="This is the global context component">
        {props.children}
    </GlobalContext.Provider>
 

}

export default GlobalContextProvider