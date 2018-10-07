import { observable, action, runInAction } from 'mobx';

class SingleBeerStore {
  @observable public singleBeer = {};

  @action public fetchSingleBeer = async (id: string) => {
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const json = await response.json();
      runInAction(() => {
        this.singleBeer = json[0];
      });
    } catch (err) {
      throw new Error(err);
    }
  };
  @action public reset = () => {
    this.singleBeer = {};
  }
};

const singleBeerStore = new SingleBeerStore;

export default singleBeerStore;
