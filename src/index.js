import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import App from "./containers/App";

const update = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

store.subscribe(update);
update();
