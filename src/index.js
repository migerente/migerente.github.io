import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './Main'
import './index.css'

const root = createRoot(document.querySelector('#root'))
root.render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
