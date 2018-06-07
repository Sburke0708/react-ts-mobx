import { types } from 'mobx-state-tree';

const { array, optional } = types;

/**
 * NOTES:
 * Models are read only. You create actions
 * to modify the self arguments.
 * Views are read only. Views are not allowed
 * to change the model, they are only allowed
 * to derive information from it.
 */
export const WishListItem = types
  .model({
    image: "",
    name: types.string,
    price: types.number,
  })
  .actions(self => ({
    changeName(newName: string) {
      self.name = newName;
    },
    changePrice(newPrice: number) {
      self.price = newPrice;
    },
    changeImage(newImage: string) {
      self.image = newImage;
    },
  }));

export const WishList = types
  .model({
    items: optional(array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    }
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum, entry) => sum + entry.price, 0);
    }
  }));