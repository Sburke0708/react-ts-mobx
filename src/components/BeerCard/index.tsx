import * as React from 'react';
import Card from '../Card';
import Button from '../Button';

interface IBeer {
  id: string;
  image_url: string;
  name: string;
}

interface IBeerCardProps {
  beer: IBeer,
  routerStore: any
}

const BeerCard: React.SFC<IBeerCardProps> = ({ beer, routerStore }) => {
  return (
    <Card>
      <img src={beer.image_url} height="300px" />
      {beer.name}
      <Button onClick={() => routerStore.push(`/beer/${beer.id}`)}>Select</Button>
    </Card>
  )
}

export default BeerCard