import {
  ChangeEvent,
  FC,
  Fragment,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'

import { Card } from '@/components/Card'
import { Center } from '@/components/Center'
import { List } from '@/components/List'
import { Select } from '@/components/Select'
import { Spacer } from '@/components/Spacer'
import {
  Switch,
  SwitchColor,
  SwitchProps,
  SwitchSize,
} from '@/components/Switch'
import { Table } from '@/components/Table'

import styles from './SwitchPage.module.css'

const SwitchSizes: SwitchSize[] = ['small', 'medium', 'large']
const SwitchColors: SwitchColor[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
]

const SwitchWrapper: FC<SwitchProps> = ({ checked, ...props }) => {
  const [state, setState] = useState(false)
  return (
    <Switch
      onChange={e => setState(e.target.checked)}
      checked={checked || state}
      {...props}
    />
  )
}

const Code: FC = () => {
  const [openSizes, setOpenSizes] = useState(false)
  const [openColors, setOpenColors] = useState(false)

  const [size, setSize] = useState<SwitchSize>('medium')
  const [color, setColor] = useState<SwitchColor>('primary')
  const [checked, setChecked] = useState(false)

  const handleOnOpenSizes = () => setOpenSizes(true)
  const handleOnCloseSizes = () => setOpenSizes(false)
  const handleSizesChange = (value: string) => {
    setSize(value as SwitchSize)
    handleOnCloseSizes()
  }

  const handleOnOpenColors = () => setOpenColors(true)
  const handleOnCloseColors = () => setOpenColors(false)
  const handleColorsChange = (value: string) => {
    setColor(value as SwitchColor)
    handleOnCloseColors()
  }

  const handleChangeChecked = (event: ChangeEvent<HTMLInputElement>) =>
    setChecked(event.target.checked)

  const code = useMemo(
    () => `\
<Switch${size && size !== 'medium' ? ` size="${size}"` : ''}${
      color && color !== 'primary' ? ` color="${color}"` : ''
    }${checked ? ' checked' : ''} />\
  `,
    [size, color, checked],
  )

  useLayoutEffect(() => {
    window.Prism.highlightAll()
  })

  return (
    <List id="code" flexDirection="column" gap="8px">
      <h3>Try yourself</h3>
      <div className={styles.SwitchPage_try_container}>
        <div className={styles.SwitchPage_try_code}>
          <pre>
            <code className="language-tsx">{code}</code>
          </pre>
        </div>
        <div className={styles.SwitchPage_try_options}>
          <Center>
            <List gap="8px" flexWrap="wrap" justifyContent="center">
              <span className={styles.SwitchPage_try_option}>
                <h4>Size</h4>
                <Spacer height="8px" />
                <Select
                  value={size}
                  options={SwitchSizes}
                  open={openSizes}
                  onSelect={handleSizesChange}
                  onOpen={handleOnOpenSizes}
                  onClose={handleOnCloseSizes}
                />
              </span>
              <span className={styles.SwitchPage_try_option}>
                <h4>Color</h4>
                <Spacer height="8px" />
                <Select
                  value={color}
                  options={SwitchColors}
                  open={openColors}
                  onSelect={handleColorsChange}
                  onOpen={handleOnOpenColors}
                  onClose={handleOnCloseColors}
                />
              </span>
              <span className={styles.SwitchPage_try_option}>
                <h4>Checked</h4>
                <Spacer height="8px" />
                <Switch checked={checked} onChange={handleChangeChecked} />
              </span>
            </List>
          </Center>
        </div>
        <div className={styles.SwitchPage_try_preview}>
          <Center>
            <SwitchWrapper color={color} size={size} checked={checked} />
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
        ['color', 'SwitchColor', 'primary', 'false', 'Color of the switch'],
        ['size', 'SwitchSize', 'medium', 'false', 'Size of the switch'],
        [
          'checked',
          'boolean',
          'false',
          'false',
          'Whether the command or control is checked',
        ],
        [
          'onChange',
          'ChangeEventHandler',
          undefined,
          'false',
          'Emit an event when the value changes',
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
        ['SwitchSize', 'small | medium | large'],
        [
          'SwitchColor',
          'primary | secondary | success | error | warning | info',
        ],
      ]}
    />
  </List>
)

const AllOptions: FC = () => (
  <List id="all-options" flexDirection="column" gap="8px">
    <h3>All options</h3>
    <List gap="12px" flexDirection="column">
      <List gap="12px" flexDirection="column" flexWrap="wrap">
        {SwitchSizes.map((size, sizeIndex) => (
          <Card key={`${sizeIndex}-${size}`}>
            <h3>{size}</h3>
            <Spacer height="12px" />
            <List
              gap="12px"
              flexDirection="row"
              justifyContent="space-around"
              flexWrap="wrap"
            >
              {SwitchColors.map((color, colorIndex) => (
                <Fragment key={`${sizeIndex}-${size}_${colorIndex}-${color}`}>
                  <List flexDirection="column" gap="8px">
                    <h4>{color}</h4>
                    <SwitchWrapper color={color} size={size} />
                  </List>
                </Fragment>
              ))}
            </List>
          </Card>
        ))}
      </List>
      <Card>
        <List gap="16px" flexWrap="wrap">
          <List flexDirection="column" gap="8px">
            <h4>checked</h4>
            <SwitchWrapper checked />
          </List>
        </List>
      </Card>
    </List>
  </List>
)

export const SwitchPage: FC = () => (
  <Center y={false}>
    <div className={styles.SwitchPage_container}>
      <List flexDirection="column" gap="32px">
        <h1>Switch</h1>
        <Code />
        <Props />
        <Types />
        <AllOptions />
      </List>
    </div>
  </Center>
)
