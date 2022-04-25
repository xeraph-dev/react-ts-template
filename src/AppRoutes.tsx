import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LangLayout } from '@/layouts/LangLayout'

import { Docslayouts } from './layouts/DocsLayout'
import { AccordionPage } from './pages/AccordionPage'
import { ButtonPage } from './pages/ButtonPage'
import { CardPage } from './pages/CardPage'
import { CenterPage } from './pages/CenterPage'
import { ContainerPage } from './pages/ContainerPage'
import { DividerPage } from './pages/DividerPage'
import { DocsPage } from './pages/DocsPage'
import { DotPage } from './pages/DotPage'
import { ExperimentsPage } from './pages/ExperimentsPage'
import { HomePage } from './pages/HomePage'
import { LinkPage } from './pages/LinkPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SwitchPage } from './pages/SwitchPage'

const AppRoutes: FC = () => (
  <Routes>
    {['/', '/:lang'].map(path => (
      <Route key={path} path={path} element={<LangLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="docs" element={<Docslayouts />}>
          <Route index element={<DocsPage />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="button" element={<ButtonPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="center" element={<CenterPage />} />
          <Route path="container" element={<ContainerPage />} />
          <Route path="divider" element={<DividerPage />} />
          <Route path="dot" element={<DotPage />} />
          <Route path="link" element={<LinkPage />} />
          <Route path="switch" element={<SwitchPage />} />
        </Route>
        <Route path="experimental" element={<ExperimentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    ))}
  </Routes>
)

export default AppRoutes
