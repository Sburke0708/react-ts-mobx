import { observable, action, runInAction } from 'mobx';

class BeerStore {
  @observable public beerList = [];

  @action public fetchBeerList = async () => {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80");
      const json = await response.json();
      runInAction(() => {
        this.beerList = json;
      });
    } catch (err) {
      throw new Error(err);
    }
  };
};

const beerStore = new BeerStore;

export default beerStore;
