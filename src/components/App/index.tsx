import * as React from "react";
import { observer } from "mobx-react";
// components
import { Form } from '../Form';
import { Field } from '../Field';
import InvoiceItem from '../InvoiceItem';

interface IItem {
  name: string;
  price: number;
  quantity: number;
}
interface IItemList {
  currency: string;
  isPaid: boolean;
  itemList: {
    items: IItem[];
    add(item: {}): void;
    total(): number;
  };
  markPaid(): void;
  status(): string;
}
interface IInvoiceProps {
  invoice: IItemList
}

class App extends React.Component<IInvoiceProps> {
  public render() {
    const { invoice } = this.props;
    return (
      <div className="App">
        <h1>{invoice.currency}</h1>
        <h2>Status: {invoice.status()}</h2>
        {!invoice.isPaid && (
          <button
            onClick={invoice.markPaid}
          >
            Pay
          </button>
        )}

        <Form
          action="http://localhost:4351/api/contactus"
          render={() => (
            <React.Fragment>
              <div className="alert alert-info" role="alert">
                Enter the information below and we'll get back to you as soon as we
                can.
              </div>
              <Field id="name" label="Name" />
              <Field id="email" label="Email" />
              <Field
                id="reason"
                label="Reason"
                editor="dropdown"
                options={["Marketing", "Support", "Feedback", "Jobs"]}
              />
              <Field id="notes" label="Notes" editor="multilinetextbox" />
            </React.Fragment>
          )}
        />

        <strong>Total Cost ${invoice.itemList.total().toFixed(2)}</strong>

        <ul>
          {invoice.itemList.items.map((item, i) => (
            <InvoiceItem key={i} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
export default observer(App);
