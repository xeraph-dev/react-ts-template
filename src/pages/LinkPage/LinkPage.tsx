import { FC, useLayoutEffect } from 'react'

import { Card } from '@/components/Card'
import { Center } from '@/components/Center'
import Link from '@/components/Link'
import { List } from '@/components/List'
import { Spacer } from '@/components/Spacer'
import { Table } from '@/components/Table'

import styles from './LinkPage.module.css'

const Props: FC = () => (
  <List id="props" flexDirection="column" gap="8px">
    <h3>Props</h3>
    <Table
      columns={['Name', 'Type', 'Default', 'Required', 'Description']}
      data={[
        [
          'asButton',
          'boolean',
          undefined,
          'false',
          'If **true**, the link will be rendered as a button.',
        ],
        [
          'asCard',
          'boolean',
          undefined,
          'false',
          'If **true**, the link will be rendered as a card.',
        ],
        [
          'buttonProps',
          '[ButtonProps](/docs/button#props)',
          undefined,
          'false',
          'If **asButton** is true, this prop will be passed to the button.',
        ],
        [
          'cardProps',
          '[CardProps](/docs/card#props)',
          undefined,
          'false',
          'If **asCard** is true, this prop will be passed to the card.',
        ],
        [
          '...props',
          'RouterLinkProps',
          undefined,
          'false',
          'Props extended of RouterLinkProps props',
        ],
      ]}
    />
  </List>
)

const AllOptions: FC = () => (
  <List id="all-options" flexDirection="column" gap="8px">
    <h3>All options</h3>
    <List gap="12px" flexDirection="row" flexWrap="wrap">
      <Spacer>
        <List gap="16px" flexWrap="wrap" flexDirection="column">
          <Card>
            <List flexDirection="column" gap="8px">
              <div className={styles.LinkPage_try_code}>
                <pre>
                  <code className="language-tsx">{'<Link />'}</code>
                </pre>
              </div>
              <Link to="">link</Link>
            </List>
          </Card>
        </List>
      </Spacer>
      <Spacer>
        <List gap="16px" flexWrap="wrap" flexDirection="column">
          <Card>
            <List flexDirection="column" gap="8px">
              <div className={styles.LinkPage_try_code}>
                <pre>
                  <code className="language-tsx">{'<Link asButton />'}</code>
                </pre>
              </div>
              <Link to="" asButton>
                link
              </Link>
            </List>
          </Card>
        </List>
      </Spacer>
      <Spacer>
        <List gap="16px" flexWrap="wrap" flexDirection="column">
          <Card>
            <List flexDirection="column" gap="8px">
              <div className={styles.LinkPage_try_code}>
                <pre>
                  <code className="language-tsx">{'<Link asCard />'}</code>
                </pre>
              </div>
              <Link to="" asCard>
                link
              </Link>
            </List>
          </Card>
        </List>
      </Spacer>
    </List>
  </List>
)

export const LinkPage: FC = () => {
  useLayoutEffect(() => {
    window.Prism.highlightAll()
  })

  return (
    <Center y={false}>
      <div className={styles.LinkPage_container}>
        <List flexDirection="column" gap="32px">
          <h1>Link</h1>
          <Props />
          <AllOptions />
        </List>
      </div>
    </Center>
  )
}
