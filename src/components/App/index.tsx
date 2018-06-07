import * as React from 'react';
import WishListView from '../WishListView';
import './index.css';
// import WishListProps from '../../types/WishListProps';

export default class App extends React.Component<any> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <WishListView wishList={this.props.wishList} />
      </div>
    );
  }
}
