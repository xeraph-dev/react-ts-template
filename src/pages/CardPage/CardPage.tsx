import { FC, useLayoutEffect } from 'react'

import { Card } from '@/components/Card'
import { Center } from '@/components/Center'
import { List } from '@/components/List'
import { Table } from '@/components/Table'

import styles from './CardPage.module.css'

const code = `<Card>Content</Card>`

const Code: FC = () => (
  <List id="code" flexDirection="column" gap="8px">
    <h3>Try yourself</h3>
    <div className={styles.CardPage_try_container}>
      <div className={styles.CardPage_try_code}>
        <pre>
          <code className="language-tsx">{code}</code>
        </pre>
      </div>
      <div className={styles.CardPage_try_preview}>
        <Card>Content</Card>
      </div>
    </div>
  </List>
)

const Props: FC = () => (
  <List id="props" flexDirection="column" gap="8px">
    <h3>Props</h3>
    <Table
      columns={['Name', 'Type', 'Default', 'Required', 'Description']}
      data={[
        [
          '...props',
          'HTMLDivElement',
          undefined,
          'false',
          'Props extended of html div props',
        ],
      ]}
    />
  </List>
)

export const CardPage: FC = () => {
  useLayoutEffect(() => {
    window.Prism.highlightAll()
  })

  return (
    <Center y={false}>
      <div className={styles.CardPage_container}>
        <List flexDirection="column" gap="32px">
          <h1>Card</h1>
          <Code />
          <Props />
        </List>
      </div>
    </Center>
  )
}
