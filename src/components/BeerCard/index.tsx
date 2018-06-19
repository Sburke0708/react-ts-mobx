import * as React from 'react';
import Card from '../Card';
import Button from '../Button';

interface IBeer {
  image_url: string,
  name: string
}

interface IBeerCardProps {
  beer: IBeer
}

const BeerCard: React.SFC<IBeerCardProps> = ({ beer }) => {
  return (
    <Card>
      <img src={beer.image_url} height="300px" />
      {beer.name}
      <Button>Select</Button>
    </Card>
  )
}

export default BeerCard