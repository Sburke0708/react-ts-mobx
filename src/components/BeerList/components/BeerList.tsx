import * as React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

// components
import BeerCard from '../../BeerCard';

interface IBeer {
  id: string,
  image_url: string,
  name: string,
};

interface IBeerListProps {
  beerStore: {
    beerList: IBeer[],
    fetchBeerList: () => void
  },
  routerStore: any
};

// styled
const BeerListContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  max-width: 1000px;
  margin: auto;
  background: #fe8a00;
`

@inject('beerStore', 'routerStore')
@observer
export default class BeerList extends React.Component<IBeerListProps, {}> {
  public static defaultProps: IBeerListProps = {
    beerStore: {
      beerList: [],
      fetchBeerList: () => { }
    },
    routerStore: {}
  }

  public componentDidMount() {
    this.props.beerStore.fetchBeerList();
  }

  public render() {
    const { routerStore, beerStore } = this.props;
    const { beerList } = beerStore;

    return (
      <BeerListContainer>
        {beerList.map(b => (
          <BeerCard key={b.id} beer={b} routerStore={routerStore} />
        ))}
      </BeerListContainer>
    )
  }
};