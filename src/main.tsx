import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './lib/firebase'
import i18n from './i18n'
import { ReactI18next } from 'react-i18next'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactI18next.Provider i18n={i18n}>
      <App />
    </ReactI18next.Provider>
  </StrictMode>,
)
