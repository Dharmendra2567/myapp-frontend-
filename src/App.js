import React from "react";
import MyRoutes from "./MyRoutes";
import './App.css'
import './bootstrap.css'
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import CounterReducer from "./components/redux-example/CounterReducer";
import GameReducer from "./components/redux-example/GameReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
// import GlobalContextProvider from "./components/GlobalContext";
import { Store } from "./finalReducers/store";

function App() {

  
  return (

    <>
    {/* <GlobalContextProvider><MyRoutes/></GlobalContextProvider> */}
      <Provider store={Store}>
        {/* <PersistGate persistor={mypersistor}> */}
          <MyRoutes />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default App;
