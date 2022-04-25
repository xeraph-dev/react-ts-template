import { FC, Fragment, useLayoutEffect, useMemo, useState } from 'react'

import { Card } from '@/components/Card'
import { Center } from '@/components/Center'
import { Divider, DividerColor, DividerDirection } from '@/components/Divider'
import { List } from '@/components/List'
import { Select } from '@/components/Select'
import { Spacer } from '@/components/Spacer'
import { Table } from '@/components/Table'
import { classes } from '@/utils/classes'

import styles from './DividerPage.module.css'

const DividerDirections: DividerDirection[] = ['horizontal', 'vertical']
const DividerColors: DividerColor[] = [
  'primary',
  'info',
  'success',
  'warning',
  'error',
]

const Code: FC = () => {
  const [openDirections, setOpenDirections] = useState(false)
  const [openColors, setOpenColors] = useState(false)

  const [direction, setDirection] = useState<DividerDirection>('horizontal')
  const [color, setColor] = useState<DividerColor>('primary')

  const handleOnOpenDirections = () => setOpenDirections(true)
  const handleOnCloseDirections = () => setOpenDirections(false)
  const handleSizesChange = (value: string) => {
    setDirection(value as DividerDirection)
    handleOnCloseDirections()
  }

  const handleOnOpenColors = () => setOpenColors(true)
  const handleOnCloseColors = () => setOpenColors(false)
  const handleColorsChange = (value: string) => {
    setColor(value as DividerColor)
    handleOnCloseColors()
  }

  const code = useMemo(
    () => `\
<Divider${
      direction && direction !== 'horizontal' ? ` direction="${direction}"` : ''
    }${color && color !== 'primary' ? ` color="${color}"` : ''} />\
  `,
    [direction, color],
  )

  useLayoutEffect(() => {
    window.Prism.highlightAll()
  })

  return (
    <List id="code" flexDirection="column" gap="8px">
      <h3>Try yourself</h3>
      <div className={styles.DividerPage_try_container}>
        <div className={styles.DividerPage_try_code}>
          <pre>
            <code className="language-tsx">{code}</code>
          </pre>
        </div>
        <div className={styles.DividerPage_try_options}>
          <Center>
            <List gap="8px" flexWrap="wrap" justifyContent="center">
              <span className={styles.DividerPage_try_option}>
                <h4>Direction</h4>
                <Spacer height="8px" />
                <Select
                  value={direction}
                  options={DividerDirections}
                  open={openDirections}
                  onSelect={handleSizesChange}
                  onOpen={handleOnOpenDirections}
                  onClose={handleOnCloseDirections}
                />
              </span>
              <span className={styles.DividerPage_try_option}>
                <h4>Color</h4>
                <Spacer height="8px" />
                <Select
                  value={color}
                  options={DividerColors}
                  open={openColors}
                  onSelect={handleColorsChange}
                  onOpen={handleOnOpenColors}
                  onClose={handleOnCloseColors}
                />
              </span>
            </List>
          </Center>
        </div>
        <div className={styles.DividerPage_try_preview}>
          <Center>
            <Divider color={color} direction={direction} />
          </Center>
        </div>
      </div>
    </List>
  )
}

const Props: FC = () => (
  <List id="props" flexDirection="column" gap="8px">
    <h3>Props</h3>
    <Table
      columns={['Name', 'Type', 'Default', 'Required', 'Description']}
      data={[
        [
          'color',
          'DividerColor',
          'primary',
          'false',
          'The color of the divider.',
        ],
        [
          'direction',
          'DividerDirection',
          'horizontal',
          'false',
          'The direction of the divider.',
        ],
        [
          'className',
          'string',
          undefined,
          'false',
          'Custom classname to be added to the component.',
        ],
      ]}
    />
  </List>
)

const Types: FC = () => (
  <List id="types" flexDirection="column" gap="8px">
    <h3>Types</h3>
    <Table
      columns={['Name', 'Definition']}
      data={[
        ['DividerDirection', 'horizontal | vertical'],
        ['DividerColor', 'primary | success | error | warning | info'],
      ]}
    />
  </List>
)

const AllOptions: FC = () => (
  <List id="all-options" flexDirection="column" gap="8px">
    <h3>All options</h3>
    <List gap="12px" flexDirection="column">
      <List gap="12px" flexDirection="column" flexWrap="wrap">
        {DividerDirections.map((direction, directionIndex) => (
          <Card key={`${directionIndex}-${direction}`}>
            <h3>{direction}</h3>
            <Spacer height="12px" />
            <List
              gap="12px"
              flexDirection="row"
              justifyContent="space-around"
              flexWrap="wrap"
            >
              {DividerColors.map((color, colorIndex) => (
                <Fragment
                  key={`${directionIndex}-${direction}_${colorIndex}-${color}`}
                >
                  <List
                    flexDirection="column"
                    gap="8px"
                    className={classes({
                      [styles.DividerPage_alloptions_item]:
                        direction === 'vertical',
                    })}
                  >
                    <h4>{color}</h4>
                    <Divider color={color} direction={direction} />
                  </List>
                </Fragment>
              ))}
            </List>
          </Card>
        ))}
      </List>
    </List>
  </List>
)

export const DividerPage: FC = () => (
  <Center y={false}>
    <div className={styles.DividerPage_container}>
      <List flexDirection="column" gap="32px">
        <h1>Divider</h1>
        <Code />
        <Props />
        <Types />
        <AllOptions />
      </List>
    </div>
  </Center>
)
