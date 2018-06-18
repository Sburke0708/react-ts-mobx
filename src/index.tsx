import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";


const invoice = {};

ReactDOM.render(<App invoice={invoice} />, document.getElementById("root"));
registerServiceWorker();