import {
  ChangeEvent,
  FC,
  Fragment,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { DiReact } from 'react-icons/di'

import {
  Button,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/Button'
import { Card } from '@/components/Card'
import { Center } from '@/components/Center'
import { List } from '@/components/List'
import { Select } from '@/components/Select'
import { Spacer } from '@/components/Spacer'
import { Switch } from '@/components/Switch'
import { Table } from '@/components/Table'

import styles from './ButtonPage.module.css'

const ButtonVariants: ButtonVariant[] = ['contained', 'outlined', 'text']
const ButtonSizes: ButtonSize[] = ['small', 'medium', 'large']
const ButtonColors: ButtonColor[] = [
  'normal',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
]

const Code: FC = () => {
  const [openSizes, setOpenSizes] = useState(false)
  const [openColors, setOpenColors] = useState(false)
  const [openVariants, setOpenVariants] = useState(false)

  const [size, setSize] = useState<ButtonSize>('medium')
  const [color, setColor] = useState<ButtonColor>('normal')
  const [variant, setVariant] = useState<ButtonVariant>('contained')
  const [fullWidth, setFullWidth] = useState(false)
  const [active, setActive] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [icon, setIcon] = useState(false)

  const handleOnOpenSizes = () => setOpenSizes(true)
  const handleOnCloseSizes = () => setOpenSizes(false)
  const handleSizesChange = (value: string) => {
    setSize(value as ButtonSize)
    handleOnCloseSizes()
  }

  const handleOnOpenColors = () => setOpenColors(true)
  const handleOnCloseColors = () => setOpenColors(false)
  const handleColorsChange = (value: string) => {
    setColor(value as ButtonColor)
    handleOnCloseColors()
  }

  const handleOnOpenVariant = () => setOpenVariants(true)
  const handleOnCloseVariant = () => setOpenVariants(false)
  const handleVariantChange = (value: string) => {
    setVariant(value as ButtonVariant)
    handleOnCloseVariant()
  }

  const handleChangeFullWidth = (event: ChangeEvent<HTMLInputElement>) =>
    setFullWidth(event.target.checked)
  const handleChangeActive = (event: ChangeEvent<HTMLInputElement>) =>
    setActive(event.target.checked)
  const handleChangeDisabled = (event: ChangeEvent<HTMLInputElement>) =>
    setDisabled(event.target.checked)
  const handleChangeLoading = (event: ChangeEvent<HTMLInputElement>) =>
    setLoading(event.target.checked)
  const handleChangeIcon = (event: ChangeEvent<HTMLInputElement>) =>
    setIcon(event.target.checked)

  const code = useMemo(
    () => `\
${icon ? "import { DiReact } from 'react-icons/di'\n\n" : ''}\
<Button${size && size !== 'medium' ? ` size="${size}"` : ''}${
      variant && variant !== 'contained' ? ` variant="${variant}"` : ''
    }${color && color !== 'normal' ? ` color="${color}"` : ''}${
      fullWidth ? ' fullWidth' : ''
    }${active ? ' active' : ''}${disabled ? ' disabled' : ''}${
      loading ? ' loading' : ''
    }${icon ? ' icon={<DiReact />}' : ''}>
  button
</Button>\
  `,
    [size, variant, color, fullWidth, active, disabled, loading, icon],
  )

  useLayoutEffect(() => {
    window.Prism.highlightAll()
  })

  return (
    <List id="code" flexDirection="column" gap="8px">
      <h3>Try yourself</h3>
      <div className={styles.ButtonPage_try_container}>
        <div className={styles.ButtonPage_try_code}>
          <pre>
            <code className="language-tsx">{code}</code>
          </pre>
        </div>
        <div className={styles.ButtonPage_try_options}>
          <Center>
            <List gap="8px" flexWrap="wrap" justifyContent="center">
              <span className={styles.ButtonPage_try_option}>
                <h4>Variant</h4>
                <Spacer height="8px" />
                <Select
                  value={variant}
                  options={ButtonVariants}
                  open={openVariants}
                  onSelect={handleVariantChange}
                  onOpen={handleOnOpenVariant}
                  onClose={handleOnCloseVariant}
                />
              </span>
              <span className={styles.ButtonPage_try_option}>
                <h4>Size</h4>
                <Spacer height="8px" />
                <Select
                  value={size}
                  options={ButtonSizes}
                  open={openSizes}
                  onSelect={handleSizesChange}
                  onOpen={handleOnOpenSizes}
                  onClose={handleOnCloseSizes}
                />
              </span>
              <span className={styles.ButtonPage_try_option}>
                <h4>Color</h4>
                <Spacer height="8px" />
                <Select
                  value={color}
                  options={ButtonColors}
                  open={openColors}
                  onSelect={handleColorsChange}
                  onOpen={handleOnOpenColors}
                  onClose={handleOnCloseColors}
                />
              </span>
              <span className={styles.ButtonPage_try_option}>
                <h4>FullWidth</h4>
                <Spacer height="8px" />
                <Switch checked={fullWidth} onChange={handleChangeFullWidth} />
              </span>
              <span className={styles.ButtonPage_try_option}>
                <h4>Active</h4>
                <Spacer height="8px" />
                <Switch checked={active} onChange={handleChangeActive} />
              </span>
              <span className={styles.ButtonPage_try_option}>
                <h4>Disabled</h4>
                <Spacer height="8px" />
                <Switch checked={disabled} onChange={handleChangeDisabled} />
              </span>
              <span className={styles.ButtonPage_try_option}>
                <h4>Loading</h4>
                <Spacer height="8px" />
                <Switch checked={loading} onChange={handleChangeLoading} />
              </span>
              <span className={styles.ButtonPage_try_option}>
                <h4>Icon</h4>
                <Spacer height="8px" />
                <Switch checked={icon} onChange={handleChangeIcon} />
              </span>
            </List>
          </Center>
        </div>
        <div className={styles.ButtonPage_try_preview}>
          <Center>
            <Button
              color={color}
              size={size}
              variant={variant}
              fullWith={fullWidth}
              active={active}
              disabled={disabled}
              loading={loading}
              icon={icon && <DiReact />}
            >
              button
            </Button>
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
        ['color', 'ButtonColor', 'primary', 'false', 'Color of the button'],
        [
          'variant',
          'ButtonVariant',
          'contained',
          'false',
          'Variant of the button',
        ],
        ['size', 'ButtonSize', 'medium', 'false', 'Size of the button'],
        ['icon', 'ReactNode', 'undefined', 'false', 'Icon of the button'],
        [
          'loading',
          'boolean',
          'false',
          'false',
          `If **true**, the button will be disabled and change content to a loader`,
        ],
        [
          'active',
          'boolean',
          'false',
          'false',
          'If **true**, the button will be active',
        ],
        [
          'fullWith',
          'boolean',
          'false',
          'false',
          'If **true**, the button will be expanded to full width',
        ],
        [
          '...props',
          'HTMLButtonElement',
          undefined,
          'false',
          'Props extended of html button props',
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
        ['ButtonSize', 'small | medium | large'],
        ['ButtonVariant', 'contained | outlined | text'],
        [
          'ButtonColor',
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
      {ButtonVariants.map((variant, variantIndex) => (
        <Card key={`${variantIndex}-${variant}`}>
          <h3>{variant}</h3>
          <Spacer height="12px" />
          <List gap="12px" flexDirection="column" flexWrap="wrap">
            {ButtonSizes.map((size, sizeIndex) => (
              <Card key={`${variantIndex}-${variant}_${sizeIndex}-${size}`}>
                <h3>{size}</h3>
                <Spacer height="12px" />
                <List
                  gap="12px"
                  flexDirection="row"
                  justifyContent="space-around"
                  flexWrap="wrap"
                >
                  {ButtonColors.map((color, colorIndex) => (
                    <Fragment
                      key={`${variantIndex}-${variant}_${sizeIndex}-${size}_${colorIndex}-${color}`}
                    >
                      <List flexDirection="column" gap="8px">
                        <h4>{color}</h4>
                        <Button color={color} variant={variant} size={size}>
                          Button
                        </Button>
                      </List>
                    </Fragment>
                  ))}
                </List>
              </Card>
            ))}
          </List>
        </Card>
      ))}
      <Card>
        <List gap="16px" flexDirection="column">
          <List gap="16px" flexWrap="wrap">
            <List flexDirection="column" gap="8px">
              <h4>active</h4>
              <Button active>Button</Button>
            </List>
            <List flexDirection="column" gap="8px">
              <h4>disabled</h4>
              <Button disabled>Button</Button>
            </List>
            <List flexDirection="column" gap="8px">
              <h4>loading</h4>
              <Button loading>Button</Button>
            </List>
            <List flexDirection="column" gap="8px">
              <h4>icon</h4>
              <Button icon={<DiReact />}>Button</Button>
            </List>
          </List>
          <List flexDirection="column" gap="8px">
            <h4>fullWidth</h4>
            <Button fullWith>Button</Button>
          </List>
        </List>
      </Card>
    </List>
  </List>
)

export const ButtonPage: FC = () => (
  <Center y={false}>
    <div className={styles.ButtonPage_container}>
      <List flexDirection="column" gap="32px">
        <h1>Button</h1>
        <Code />
        <Props />
        <Types />
        <AllOptions />
      </List>
    </div>
  </Center>
)
