import React from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import backend from '../backend'

const TaxonCard = ({ taxonId }) => {
  const url = backend.getTaxonPhotoUrl(taxonId);

  return (
    <Card>
      <CardMedia
        overlay={
          <CardTitle title="Vitenskapelig navn" subtitle="Populærnavn" />
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
