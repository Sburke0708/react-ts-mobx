import {
  reaction
} from 'mobx';
import {
  getSnapshot
} from 'mobx-state-tree';
import {
  WishListItem,
  WishList
} from './WishList';

it("can create an instance of a model", () => {
  const item = WishListItem.create({
    name: 'Tom Brady Book',
    price: 19.99
  });
  expect(item.price).toBe(19.99);
  expect(item.image).toBe("");

  item.changeName('foo bar');
  expect(item.name).toBe('foo bar');
});

it("can create a wish list", () => {
  const list = WishList.create({
    items: [{
      name: 'Tom Brady Book',
      price: 19.99
    }]
  });
  expect(list.items.length).toBe(1);
  expect(list.items[0].price).toBe(19.99);
});

it("can add new items", () => {
  const list = WishList.create();
  list.add({
    name: 'Dr. Suess',
    price: 11.99
  });
  expect(list.items.length).toBe(1);
  expect(list.items[0].price).toBe(11.99);
  list.items[0].changeName('Limitless');
  expect(list.items[0].name).toBe('Limitless');

  /** 
   * Snapshot: Get me a snapshot of the entire tree
   * as pure JSON. This is the "final structure".
   * This is one way to check. A better way is to use
   * Jest snapshots. See uncommented example.
   */
  // expect(getSnapshot(list)).toEqual({
  //   items: [{
  //     name: "Limitless",
  //     price: 11.99,
  //     image: ""
  //   }]
  // });
  expect(getSnapshot(list)).toMatchSnapshot();
});

it("can get the total price of a wish list", () => {
  const list = WishList.create({
    items: [{
      image: "",
      name: "Lego set",
      price: 23.99,
    },
    {
      image: "",
      name: "Television",
      price: 291.67,
    }
    ]
  });
  expect(list.totalPrice).toBe(315.66);

  /**
   * Reactions:
   * These come from Mobx. Mobx will only
   * change the necessary data-items if changed.
   * Reactions verify this behavior.
   */
  let changed = 0;
  reaction(
    () => list.totalPrice,
    () => changed++
  );
  expect(changed).toBe(0);
  list.items[0].changeName("Test");
  expect(changed).toBe(0);
  list.items[0].changePrice(24);
  expect(changed).toBe(1);
});