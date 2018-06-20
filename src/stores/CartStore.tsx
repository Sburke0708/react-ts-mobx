import { observable, action, computed } from 'mobx';

class CartStore {
  @observable public items = [];

  @action public addToCart = (item: object) => {
    this.items.push(item);
    return this.items;
  }

  @computed get cartCount() {
    return this.items.length;
  }
};

const cartStore = new CartStore;

export default cartStore;
