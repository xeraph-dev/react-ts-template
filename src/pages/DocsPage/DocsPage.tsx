import { FC } from 'react'

import { Center } from '@/components/Center'
import Link from '@/components/Link'
import { List } from '@/components/List'
import { capitalize } from '@/utils/capitalize'

import styles from './DocsPage.module.css'

const docPages = [
  'accordion',
  'button',
  'card',
  'center',
  'container',
  'divider',
  'dot',
  'link',
  'switch',
]

export const DocsPage: FC = () => (
  <List justifyContent="center" gap="16px" flexWrap="wrap">
    {docPages.map(page => (
      <Link
        key={page}
        to={`/docs/${page}`}
        className={styles.DocsPage_card_to_page}
        asCard
      >
        <Center>
          <h2>{capitalize(page)}</h2>
        </Center>
      </Link>
    ))}
  </List>
)
