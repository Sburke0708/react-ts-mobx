import * as React from 'react';
import WishListItemView from './WishListItemView';

const WishListView = ({ wishList }) => (
  <div className="list">
    <ul>
      {wishList.items.map((item, idx) => (
        <WishListItemView
          item={item}
          key={idx}
        />
      ))}
    </ul>
  </div>
);

export default WishListView;