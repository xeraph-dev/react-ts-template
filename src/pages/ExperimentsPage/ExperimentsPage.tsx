import { FC } from 'react'

import { Center } from '@/components/Center'
import { Container } from '@/components/Container'
import { Tab, TabPanel, TabPanels, TabRoot, Tabs } from '@/components/Tabs'

export const ExperimentsPage: FC = () => (
  <Container>
    <Center>
      <TabRoot>
        <Tabs>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>hola 1</TabPanel>
          <TabPanel>hola 2</TabPanel>
        </TabPanels>
      </TabRoot>
    </Center>
  </Container>
)
