import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';
import { WishList } from './models/WishList';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const wishList = WishList.create({
  items: [{
    image: '',
    name: 'test',
    price: 10.99,
  }]
})

ReactDOM.render(
  <App wishList={wishList} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
