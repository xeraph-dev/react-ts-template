import { FC, useLayoutEffect } from 'react'

import { Accordion, AccordionProps } from '@/components/Accordion'
import { Card } from '@/components/Card'
import { Center } from '@/components/Center'
import { List } from '@/components/List'
import { Table } from '@/components/Table'

import styles from './AccordionPage.module.css'

export const AccordionWrapper: FC<Omit<AccordionProps, 'items'>> = ({
  ...props
}) => (
  <Accordion
    {...props}
    items={[
      {
        title: 'Title 1',
        content: 'Content',
      },
      {
        title: 'Title 2',
        content: 'Content',
      },
      {
        title: 'Title 3',
        content: 'Content',
      },
    ]}
  />
)

const codeItems = `\
const items = [
  {
    title: 'Title 1',
    content: 'Content',
  },
  {
    title: 'Title 2',
    content: 'Content',
  },
  {
    title: 'Title 3',
    content: 'Content',
  },
]
`

const Props: FC = () => (
  <List id="props" flexDirection="column" gap="8px">
    <h3>Props</h3>
    <Table
      columns={['Name', 'Type', 'Default', 'Required', 'Description']}
      data={[
        ['items', 'AccordionItem[]', undefined, 'true', 'Accordion items'],
        [
          'initialExpanded',
          'number[]',
          '[]',
          'false',
          `\
  Initial expanded items indexes\n
  If **maxExpandedCount** is set to **1** and **initialExpanded** length is larger than **1**, only the first item will be expanded\n
  If **maxExpandedCount** is set to **0**, any item will be expanded\n
  If **maxExpandedCount** is set to **-1**, all values of **initialExpanded** will be expanded\
  `,
        ],
        [
          'maxExpandedCount',
          '1 | 0 | -1',
          '1',
          'false',
          `\
  Maximum number of expanded items allowed\n
  If **-1**, all items can be expanded\n
  If **0**, any item can be expanded\n
  If **1**, only one item can be expanded\
          `,
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
        [
          'AccordionItem',
          `\`\`\`typescript
          {
            title: ReactNode
            content: ReactNode
            className?: string
          }
          `,
        ],
      ]}
    />
  </List>
)

const AllOptions: FC = () => (
  <List id="all-options" flexDirection="column" gap="8px">
    <h3>All options</h3>
    <div className={styles.AccordionPage_try_code}>
      <pre>
        <code className="language-tsx">{codeItems}</code>
      </pre>
    </div>
    <List gap="12px" flexDirection="column">
      <List gap="16px" flexWrap="wrap" flexDirection="column">
        <Card>
          <List flexDirection="column" gap="8px">
            <div className={styles.AccordionPage_try_code}>
              <pre>
                <code className="language-tsx">
                  {
                    '<Accordion items={items} initialExpanded={[1]} maxExpandedCount={1} />'
                  }
                </code>
              </pre>
            </div>
            <Card className={styles.AccordionPage_alloptions_item}>
              <AccordionWrapper initialExpanded={[1]} maxExpandedCount={1} />
            </Card>
          </List>
        </Card>
        <Card>
          <List flexDirection="column" gap="8px">
            <div className={styles.AccordionPage_try_code}>
              <pre>
                <code className="language-tsx">
                  {
                    '<Accordion items={items} initialExpanded={[1, 2]} maxExpandedCount={-1} />'
                  }
                </code>
              </pre>
            </div>
            <Card className={styles.AccordionPage_alloptions_item}>
              <AccordionWrapper
                initialExpanded={[1, 2]}
                maxExpandedCount={-1}
              />
            </Card>
          </List>
        </Card>
        <Card>
          <List flexDirection="column" gap="8px">
            <div className={styles.AccordionPage_try_code}>
              <pre>
                <code className="language-tsx">
                  {'<Accordion items={items} maxExpandedCount={0} />'}
                </code>
              </pre>
            </div>
            <Card className={styles.AccordionPage_alloptions_item}>
              <AccordionWrapper maxExpandedCount={0} />
            </Card>
          </List>
        </Card>
      </List>
    </List>
  </List>
)

export const AccordionPage: FC = () => {
  useLayoutEffect(() => {
    window.Prism.highlightAll()
  })

  return (
    <Center y={false}>
      <div className={styles.AccordionPage_container}>
        <List flexDirection="column" gap="32px">
          <h1>Accordion</h1>
          <Props />
          <Types />
          <AllOptions />
        </List>
      </div>
    </Center>
  )
}
