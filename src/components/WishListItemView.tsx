import * as React from 'react';

const WishListItemView = ({ item }) => {
  return (
    <li className="item">
      {item.image && <img src={item.image} alt="item" />}
      <h3>{item.name}</h3>
      <span>{item.price}</span>
    </li>
  )
}

export default WishListItemView;