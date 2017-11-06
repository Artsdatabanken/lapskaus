import React from 'react'
import renderer from 'react-test-renderer'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import EnvironmentFilterHeatMap from './EnvironmentFilterHeatMap'

const textureWidth = 1237
const textureHeight = 1552

storiesOf('Map environment filtered', module)
.addDecorator(withKnobs)
.add('alt', () => {
    return (
  <Map title={name} taxonId={0} filterMin={0} filterMax={20000} />
)})
.add('dekkfrøete <200m ASL', () => (
  <Map
    taxonId={1281} filterMin={0} filterMax={200} />
))
.add('dekkfrøete >400m ASL', () => (
  <Map
  taxonId={1281} filterMin={400} filterMax={20000} />
))
.add('fjellbjørk <600m ASL', () => (
  <Map
  taxonId={138955} filterMin={0} filterMax={600} />
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

  const alpha = number('alpha', 1.0, options);
  const filterMin = number('filterMin', props.filterMin, elevationOptions);
  const filterMax = number('filterMax', props.filterMax, elevationOptions);
  return (
  <div
    style={{
      width: textureWidth,
      height: textureHeight,
    }}
  >
    <h3>Taxon #{props.taxonId}: range {filterMin}-{filterMax}</h3>
    <EnvironmentFilterHeatMap {...props}
      alpha={alpha} filterMin={filterMin} filterMax={filterMax}/>
  </div>
)
}