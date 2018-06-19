import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ArticleContainer from '../../ArticleContainer';

// components
import Tag from '../../Tag';

const Section = styled.section`
  grid-column: main;
`

const Figure = styled.figure`
  grid-column: full;
  margin: auto;
`

interface ISingleBeerProps {
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

@inject('singleBeerStore')
@observer
export default class SingleBeer extends React.Component<ISingleBeerProps> {
  public componentDidMount() {
    const { id } = this.props.match.params;
    this.props.singleBeerStore.fetchSingleBeer(id);
  }
  public render() {
    const { singleBeer } = this.props.singleBeerStore;
    return (
      <ArticleContainer>
        <Section>
          <h1>{singleBeer.name}</h1>
          <Tag>{singleBeer.tagline}</Tag>
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
