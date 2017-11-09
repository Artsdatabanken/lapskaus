import React from 'react'
import renderer from 'react-test-renderer'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import MapRawDataOnRamp from './MapRawDataOnRamp'

storiesOf('Map raw data on ramp', module)
  .addDecorator(withKnobs)
  .add('alt', () => {
    return <Map taxonId={0} />
  })
  .add('dekkfrøete', () => <Map taxonId={1281} />)
  .add('fjellbjørk', () => <Map taxonId={138955} />)

const Map = props => {
  const taxonId = number('TaxonId', 0)
  const options = {
    range: true,
    min: 0,
    max: 1.0,
    step: 0.005
  }
  return (
    <div>
      <h3>Taxon #{props.taxonId}</h3>
      <MapRawDataOnRamp
        taxonId={props.taxonId}
        width={1237}
        height={1552}
      />
    </div>
  )
}
