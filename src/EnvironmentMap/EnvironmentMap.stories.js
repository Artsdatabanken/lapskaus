import React from 'react'
import renderer from 'react-test-renderer'
import { storiesOf } from '@storybook/react'
import EnvironmentMap from './EnvironmentMap'

const textureWidth = 1237
const textureHeight = 1552

storiesOf('Map', module)
.add('dekkfrøete <200m ASL', () => (
  <Map
    title='Dekkfrøete blomsterplanter 0-200m ASL'
    taxonId={1281} filterMin={0} filterMax={20000} />
))
  .add('Dekkfrøete >900m ASL', () => (
    <Map
    title='Dekkfrøete blomsterplanter >600m ASL'
    taxonId={1281} filterMin={600} filterMax={20000} />
))

const Map = ({title, taxonId, filterMin, filterMax}) => (
  <div key={filterMin}
    style={{
      width: textureWidth * 0.45,
      height: textureHeight * 0.45
    }}
  >
    <h3>{title}</h3>
    <EnvironmentMap taxonId={taxonId} filterMin={filterMin} filterMax={filterMax} />
  </div>
)
