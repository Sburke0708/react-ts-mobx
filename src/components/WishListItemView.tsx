import * as React from 'react';

interface ItemProps {
  image: '';
  name: string;
  price: string;
}

const WishListItemView: React.SFC<ItemProps> = props => {
  const { item } = props;
  return (
    <li className="item">
      {item.image && <img src={item.image} alt="item" />}
    </li>
  )
}