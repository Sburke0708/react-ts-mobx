import { observable, action, runInAction } from 'mobx';

class SingleBeerStore {
  @observable public singleBeer = {};

  @action public fetchSingleBeer = async (id: string) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const json = await response.json();
    runInAction(() => {
      this.singleBeer = json[0];
    });
  };
};

const singleBeerStore = new SingleBeerStore;

export default singleBeerStore;
