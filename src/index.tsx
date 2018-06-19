import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import registerServiceWorker from "./registerServiceWorker";

import { createStores } from './stores';

// components
import App from "./components/App";
import "./index.css";

// set Mobx stores
const history = createBrowserHistory();
const rootStore = createStores(history);

ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();