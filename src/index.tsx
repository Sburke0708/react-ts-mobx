import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";
import Invoice from "./models/Invoice";

const invoice = Invoice.create({
  currency: "CAS",
  isPaid: false,
  itemList: {
    items: [
      {
        name: '',
        price: 23,
        quantity: 24,
      }
    ],
  }
});

onPatch(invoice, patch => {
  console.log(patch);
});
makeInspectable(invoice);

ReactDOM.render(<App invoice={invoice} />, document.getElementById("root"));
registerServiceWorker();