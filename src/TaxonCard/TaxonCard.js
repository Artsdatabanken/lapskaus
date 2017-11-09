import React from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
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
          <CardTitle title={(taxon.scientificName || "") + (taxon.scientificNameAuthor ?  ", " + taxon.scientificNameAuthor : "")} subtitle={taxon.popularName} />
        }
      >
          <img src={url} alt="" />
      </CardMedia>
    </Card>
  )
}

export default TaxonCard
