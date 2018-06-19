import { History } from 'history';
import { RouterStore } from './RouterStore';
import beerStore from './BeerStore';

export function createStores(history: History) {
  const routerStore = new RouterStore(history);
  return {
    routerStore,
    beerStore
  };
}