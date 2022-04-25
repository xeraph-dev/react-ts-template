import '@/assets/prism.css'
import '@/assets/prism.js'

import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Container } from '@/components/Container'

export const Docslayouts: FC = () => (
  <Container>
    <Outlet />
  </Container>
)
