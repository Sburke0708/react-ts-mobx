import { History } from 'history';
import { RouterStore } from './RouterStore';
import beerStore from './BeerStore';
import singleBeerStore from './SingleBeerStore';

export function createStores(history: History) {
  const routerStore = new RouterStore(history);
  return {
    beerStore,
    routerStore,
    singleBeerStore
  };
}