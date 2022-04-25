import { ChangeEvent, FC, useLayoutEffect, useMemo, useState } from 'react'

import { Center } from '@/components/Center'
import { List } from '@/components/List'
import { Spacer } from '@/components/Spacer'
import { Switch } from '@/components/Switch'
import { Table } from '@/components/Table'

import styles from './CenterPage.module.css'

const Code: FC = () => {
  const [x, setX] = useState(true)
  const [y, setY] = useState(true)

  const code = useMemo(
    () => `\
  <Center${!x ? ' x={false}' : ''}${!y ? ' y={false}' : ''}>Content</Center>\
  `,
    [x, y],
  )
  const handleChangeX = (event: ChangeEvent<HTMLInputElement>) =>
    setX(event.target.checked)
  const handleChangeY = (event: ChangeEvent<HTMLInputElement>) =>
    setY(event.target.checked)

  useLayoutEffect(() => {
    window.Prism.highlightAll()
  })

  return (
    <List id="code" flexDirection="column" gap="8px">
      <h3>Try yourself</h3>
      <div className={styles.CenterPage_try_container}>
        <div className={styles.CenterPage_try_code}>
          <pre>
            <code className="language-tsx">{code}</code>
          </pre>
        </div>
        <div className={styles.CenterPage_try_options}>
          <Center>
            <List gap="8px" flexWrap="wrap" justifyContent="center">
              <span className={styles.CenterPage_try_option}>
                <h4>X</h4>
                <Spacer height="8px" />
                <Switch checked={x} onChange={handleChangeX} />
              </span>
              <span className={styles.CenterPage_try_option}>
                <h4>Y</h4>
                <Spacer height="8px" />
                <Switch checked={y} onChange={handleChangeY} />
              </span>
            </List>
          </Center>
        </div>
        <div className={styles.CenterPage_try_preview}>
          <Center x={x} y={y}>
            Content
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
          'x',
          'boolean',
          'true',
          'false',
          'If **true**, content will be centered horizontally.',
        ],
        [
          'y',
          'boolean',
          'true',
          'false',
          'If **true**, content will be centered vertically.',
        ],
      ]}
    />
  </List>
)

export const CenterPage: FC = () => (
  <Center y={false}>
    <div className={styles.CenterPage_container}>
      <List flexDirection="column" gap="32px">
        <h1>Center</h1>
        <Code />
        <Props />
      </List>
    </div>
  </Center>
)
