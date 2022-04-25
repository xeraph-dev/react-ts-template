import '@/styles/reset.css'
import '@/styles/fonts.css'
import '@/styles/global.css'
import '@/styles/theme.css'

import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import { Theme } from '@/components/Theme'

import AppRoutes from './AppRoutes'

render(
  <Router>
    <RecoilRoot>
      <Theme>
        <AppRoutes />
      </Theme>
    </RecoilRoot>
  </Router>,
  document.querySelector('main'),
)
