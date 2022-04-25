import { FC, Fragment, useLayoutEffect, useMemo, useState } from 'react'

import { Card } from '@/components/Card'
import { Center } from '@/components/Center'
import { Dot, DotColor, DotSize } from '@/components/Dot'
import { List } from '@/components/List'
import { Select } from '@/components/Select'
import { Spacer } from '@/components/Spacer'
import { Table } from '@/components/Table'

import styles from './DotPage.module.css'

const DotSizes: DotSize[] = ['small', 'medium', 'large']
const DotsColors: DotColor[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
]

const Code: FC = () => {
  const [openSizes, setOpenDirections] = useState(false)
  const [openColors, setOpenColors] = useState(false)

  const [size, setDirection] = useState<DotSize>('medium')
  const [color, setColor] = useState<DotColor>('primary')

  const handleOnOpenSizes = () => setOpenDirections(true)
  const handleOnCloseSizes = () => setOpenDirections(false)
  const handleSizesChange = (value: string) => {
    setDirection(value as DotSize)
    handleOnCloseSizes()
  }

  const handleOnOpenColors = () => setOpenColors(true)
  const handleOnCloseColors = () => setOpenColors(false)
  const handleColorsChange = (value: string) => {
    setColor(value as DotColor)
    handleOnCloseColors()
  }

  const code = useMemo(
    () => `\
<Dot${size && size !== 'medium' ? ` size="${size}"` : ''}${
      color && color !== 'primary' ? ` color="${color}"` : ''
    } />\
  `,
    [size, color],
  )

  useLayoutEffect(() => {
    window.Prism.highlightAll()
  })

  return (
    <List id="code" flexDirection="column" gap="8px">
      <h3>Try yourself</h3>
      <div className={styles.DotPage_try_container}>
        <div className={styles.DotPage_try_code}>
          <pre>
            <code className="language-tsx">{code}</code>
          </pre>
        </div>
        <div className={styles.DotPage_try_options}>
          <Center>
            <List gap="8px" flexWrap="wrap" justifyContent="center">
              <span className={styles.DotPage_try_option}>
                <h4>Size</h4>
                <Spacer height="8px" />
                <Select
                  value={size}
                  options={DotSizes}
                  open={openSizes}
                  onSelect={handleSizesChange}
                  onOpen={handleOnOpenSizes}
                  onClose={handleOnCloseSizes}
                />
              </span>
              <span className={styles.DotPage_try_option}>
                <h4>Color</h4>
                <Spacer height="8px" />
                <Select
                  value={color}
                  options={DotsColors}
                  open={openColors}
                  onSelect={handleColorsChange}
                  onOpen={handleOnOpenColors}
                  onClose={handleOnCloseColors}
                />
              </span>
            </List>
          </Center>
        </div>
        <div className={styles.DotPage_try_preview}>
          <Center>
            <Dot color={color} size={size} />
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
        ['color', 'DotColor', 'primary', 'false', 'Color of the dot.'],
        ['size', 'DotSize', 'medium', 'false', 'Size of the dot.'],
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
        ['DotSize', 'small | medium | large'],
        ['DotColor', 'primary | secondary | success | error | warning | info'],
      ]}
    />
  </List>
)

const AllOptions: FC = () => (
  <List id="all-options" flexDirection="column" gap="8px">
    <h3>All options</h3>
    <List gap="12px" flexDirection="column">
      <List gap="12px" flexDirection="column" flexWrap="wrap">
        {DotSizes.map((size, sizeIndex) => (
          <Card key={`${sizeIndex}-${size}`}>
            <h3>{size}</h3>
            <Spacer height="12px" />
            <List
              gap="12px"
              flexDirection="row"
              justifyContent="space-around"
              flexWrap="wrap"
            >
              {DotsColors.map((color, colorIndex) => (
                <Fragment key={`${sizeIndex}-${size}_${colorIndex}-${color}`}>
                  <List flexDirection="column" gap="8px">
                    <h4>{color}</h4>
                    <Dot color={color} size={size} />
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

export const DotPage: FC = () => (
  <Center y={false}>
    <div className={styles.DotPage_container}>
      <List flexDirection="column" gap="32px">
        <h1>Dot</h1>
        <Code />
        <Props />
        <Types />
        <AllOptions />
      </List>
    </div>
  </Center>
)
