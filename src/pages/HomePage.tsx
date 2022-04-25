import { FC } from 'react'

import { Center } from '@/components/Center'
import { Container } from '@/components/Container'
import Link from '@/components/Link'
import { List } from '@/components/List'

export const HomePage: FC = () => (
  <Container>
    <Center>
      <List gap="24px">
        <Link to="/docs" asButton>
          Get started
        </Link>
        <Link to="/experimental" asButton>
          Experimental
        </Link>
      </List>
    </Center>
  </Container>
)
