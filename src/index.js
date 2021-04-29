import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./redux/reducers";
import saga from "./redux/sagas";
import App from "./App";
import "./index.scss";

const sageMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sageMiddleware));
sageMiddleware.run(saga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
