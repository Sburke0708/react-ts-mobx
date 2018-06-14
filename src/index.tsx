import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { onPatch } from "mobx-state-tree";
import Invoice from "./models/Invoice";

const invoice = Invoice.create({
  currency: "CAS",
  isPaid: false,
  itemList: {
    items: [
      {
        name: '',
        price: 0,
        quantity: 0,
      }
    ],
  }
});

onPatch(invoice, patch => {
  console.log(patch);
});

ReactDOM.render(<App invoice={invoice} />, document.getElementById("root"));
registerServiceWorker();