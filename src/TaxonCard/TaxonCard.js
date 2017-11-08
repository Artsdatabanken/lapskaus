import React from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import backend from '../backend'

const TaxonCard = ({ taxon }) => {
  const url = backend.getTaxonPhotoUrl(taxon.id);

  return (
    <Card
        title={"Bildet symboliserer ikke nødvendigvis gjeldende art, men kan være eksempel på underart eller annen nærliggende art. "}
    >
      <CardMedia
        overlay={
          <CardTitle title={taxon.scientificName} subtitle={taxon.popularName} />
        }
      >
          <img src={url} alt="" />
      </CardMedia>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  )
}

export default TaxonCard
