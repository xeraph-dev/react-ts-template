import { FC, useLayoutEffect, useMemo } from 'react'

import { Center } from '@/components/Center'
import { Container } from '@/components/Container'
import { List } from '@/components/List'
import { Table } from '@/components/Table'

import styles from './ContainerPage.module.css'

const Code: FC = () => {
  const code = useMemo(
    () => `\
  <Container>
    Cupidatat fugiat esse laborum Lorem deserunt exercitation et
    consequat voluptate. Voluptate ad duis in qui velit in laboris
    labore in. Eiusmod ullamco et occaecat occaecat deserunt qui irure
    ut occaecat cupidatat sint exercitation magna. Culpa ipsum amet
    exercitation pariatur ad esse magna eiusmod sunt aliqua aliqua.
  </Container>\
  `,
    [],
  )

  useLayoutEffect(() => {
    window.Prism.highlightAll()
  })

  return (
    <List id="code" flexDirection="column" gap="8px">
      <h3>Try yourself</h3>
      <div className={styles.ContainerPage_try_container}>
        <div className={styles.ContainerPage_try_code}>
          <pre>
            <code className="language-tsx">{code}</code>
          </pre>
        </div>
        <div className={styles.ContainerPage_try_preview}>
          <Container>
            Cupidatat fugiat esse laborum Lorem deserunt exercitation et
            consequat voluptate. Voluptate ad duis in qui velit in laboris
            labore in. Eiusmod ullamco et occaecat occaecat deserunt qui irure
            ut occaecat cupidatat sint exercitation magna. Culpa ipsum amet
            exercitation pariatur ad esse magna eiusmod sunt aliqua aliqua.
          </Container>
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

export const ContainerPage: FC = () => (
  <Center y={false}>
    <div className={styles.ContainerPage_container}>
      <List flexDirection="column" gap="32px">
        <h1>Container</h1>
        <Code />
        <Props />
      </List>
    </div>
  </Center>
)
