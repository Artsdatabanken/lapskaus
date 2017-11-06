import React from 'react'
import renderer from 'react-test-renderer'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import ObservationStaticHeatmap from './ObservationStaticHeatmap'

const textureWidth = 1237
const textureHeight = 1552

storiesOf('Map observations static ', module)
.addDecorator(withKnobs)
.add('alt', () => {
    return (
  <Map taxonId={0} />
)})
.add('dekkfrøete', () => (
  <Map
    taxonId={1281} />
))
.add('fjellbjørk', () => (
  <Map
  taxonId={138955} />
))

const Map = (props) => {
  const taxonId = number('TaxonId', 0)
  const options = {
    range: true,
    min: 0,
    max: 1.0,
    step: 0.005,
 };
 const elevationOptions = {
  range: true,
  min: 0,
  max: 2469.0,
  step: 10.00,
};

  return (
  <div
    style={{
      width: textureWidth,
      height: textureHeight,
  }}>
    <h3>Taxon #{props.taxonId}</h3>
    <ObservationStaticHeatmap taxonId={props.taxonId} />
  </div>
  )
}