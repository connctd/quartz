import React, { CSSProperties } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { TicTacToe } from './TicTacToe'

const styles: { [key: string]: CSSProperties } = {
    container: {
      display: 'flex',
    },
    cellContainer: {
      width: 100,
      height: 100,
      backgroundColor: 'rgb(72, 78, 104)',
    },
  }
  styles.firstCellContainer = { ...styles.cellContainer, marginRight: 20 }

const stories = storiesOf('TicTacToe', module)

stories.addDecorator(withInfo)
stories.addParameters({ info: { inline: true } })

stories.add('TicTacToe', () => (
  <div style={styles.container}>
    <div style={styles.firstCellContainer}>
      <TicTacToe
        value="X"
        position={{ x: 0, y: 0 }}
        onClick={action('onClick')}
      />
    </div>
    <div style={styles.cellContainer}>
      <TicTacToe
        value=" "
        position={{ x: 0, y: 1 }}
        onClick={action('onClick')}
      />
    </div>
  </div>
))

stories.add('Alternate Cells', () => (
  <div style={styles.container}>
    <div style={styles.firstCellContainer}>
      <TicTacToe
        value="O"
        position={{ x: 0, y: 0 }}
        onClick={action('onClick')}
      />
    </div>
    <div style={styles.cellContainer}>
      <TicTacToe
        value="X"
        position={{ x: 0, y: 1 }}
        onClick={action('onClick')}
      />
    </div>
  </div>
))
