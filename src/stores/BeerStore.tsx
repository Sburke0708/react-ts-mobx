import { observable, action, runInAction } from 'mobx';

class BeerStore {
  @observable public beerList = [];
  @observable public filter = "";

  @action public fetchBeerList = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80");
    const json = await response.json();
    runInAction(() => {
      this.beerList = json;
    });
  };
};

const beerStore = new BeerStore;

export default beerStore;
