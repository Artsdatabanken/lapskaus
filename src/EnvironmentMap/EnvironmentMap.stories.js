import React from 'react'
import renderer from 'react-test-renderer'
import { storiesOf } from '@storybook/react'
import EnvironmentMap from './EnvironmentMap'

const textureWidth = 1237
const textureHeight = 1552

storiesOf('Map', module)
.add('alt', () => (
  <Map
    taxonId={0} filterMin={0} filterMax={20000} />
))
.add('dekkfrøete <200m ASL', () => (
  <Map
    taxonId={1281} filterMin={0} filterMax={200} />
))
  .add('dekkfrøete >400m ASL', () => (
    <Map
    taxonId={1281} filterMin={400} filterMax={20000} />
))

const Map = ({title, taxonId, filterMin, filterMax}) => (
  <div keyx={filterMin}
    style={{
      width: textureWidth,// * 0.45,
      height: textureHeight,// * 0.45
    }}
  >
    <h3>Taxon #{taxonId}: range {filterMin}-{filterMax}</h3>
    <EnvironmentMap keyx={filterMin} taxonId={taxonId} filterMin={filterMin} filterMax={filterMax} />
  </div>
)
