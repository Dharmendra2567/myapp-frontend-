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

  // const persistConfig = {
  //   key: 'root',
  //   storage,
  // }

  // const rootReducer = combineReducers({
  //   counter: CounterReducer,
  //   game: GameReducer
  // })
  // const persistedReducer = persistReducer(persistConfig, rootReducer)
  // // const myStore = createStore(CounterReducer)
  // // const myStore= createStore(rootReducer)
  // const myStore = createStore(persistedReducer)
  // let mypersistor = persistStore(myStore)

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
