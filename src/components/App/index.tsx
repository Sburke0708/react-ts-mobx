import * as React from "react";
import * as ReactDOM from "react-dom";
import { observer } from "mobx-react";
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
  private nameInput: React.RefObject<HTMLInputElement>;
  private priceInput: React.RefObject<HTMLInputElement>;
  private quantityInput: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  public onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const { invoice } = this.props;
    e.preventDefault();
    const name = (ReactDOM.findDOMNode(this.refs.author) as HTMLInputElement).value;
    const price = (ReactDOM.findDOMNode(this.refs.price) as HTMLInputElement).value;
    const quantity = (ReactDOM.findDOMNode(this.refs.quantity) as HTMLInputElement).value;
    invoice.itemList.add({
      name,
      price,
      quantity
    });
    // e.target.reset();
    // this.nameInput.focus();
  }

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

        <form onSubmit={this.onSubmit}>
          <label>
            Name
            <input ref={this.nameInput} />
          </label>

          <label>
            Quantity
            <input ref={this.quantityInput} />
          </label>

          <label>
            Price
            <input ref={this.priceInput} />
          </label>

          <button type="submit">Add</button>
        </form>

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
