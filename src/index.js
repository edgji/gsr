// Needed for redux-saga es6 generator support
import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import App from "./containers/App";
import configureStore from "./configureStore";
import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";

// Import CSS reset and Global Styles
import "./global-styles";

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
