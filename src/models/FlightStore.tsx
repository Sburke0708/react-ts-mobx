import { autorun, observable } from 'mobx';

class FlightStore {
  @observable public flights = ["flight 1", "flight 2"];
  @observable public filter = "";
}

const store = window.store = new FlightStore;

export default store;

autorun(() => {
  console.log(store.filter);
  console.log(store.flights[0]);
});
