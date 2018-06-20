import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ArticleContainer from '../../ArticleContainer';

// components
import Tag from '../../Tag';
import { ActionButton } from '../../Button';

const Section = styled.section`
  grid-column: main;
`

const Figure = styled.figure`
  grid-column: full;
  margin: auto;
`
const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`

interface ISingleBeerProps {
  cartStore: {
    items: IItem[];
    addToCart: (p: {}) => void;
  }
  singleBeerStore: {
    fetchSingleBeer: (id: string) => {};
    singleBeer: {
      description: string;
      image_url: string;
      name: string;
      tagline: string;
    };
  };
  match: {
    params: {
      id: string
    }
  };
}

interface IItem {
  name: string;
}

@inject('singleBeerStore', 'cartStore')
@observer
export default class SingleBeer extends React.Component<ISingleBeerProps> {
  public componentDidMount() {
    const { id } = this.props.match.params;
    this.props.singleBeerStore.fetchSingleBeer(id);
  }
  public isInCart = () => {
    const { cartStore, singleBeerStore } = this.props;
    return !!cartStore.items.find(b => {
      return b.name === singleBeerStore.singleBeer.name
    });
  }
  public render() {
    const { singleBeer } = this.props.singleBeerStore;
    const { addToCart } = this.props.cartStore;
    return (
      <ArticleContainer>
        <Section>
          <TitleRow>
            <h1>{singleBeer.name}</h1>
            <ActionButton
              negative={this.isInCart()}
              onClick={() => addToCart(singleBeer)}
            >
              + Cart
            </ActionButton>
          </TitleRow>
          {singleBeer.tagline && <Tag>{singleBeer.tagline}</Tag>}
          <hr />
          {singleBeer.description}
        </Section>
        <Figure>
          <img src={singleBeer.image_url} height="500px" />
        </Figure>
      </ArticleContainer>
    );
  }
}
