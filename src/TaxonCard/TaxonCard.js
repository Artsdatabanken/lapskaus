import React from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const TaxonCard = ({ taxonId }) => {
  const url = `http://nodeyoda.westeurope.cloudapp.azure.com/taxonPhoto/${taxonId}.jpg`

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
