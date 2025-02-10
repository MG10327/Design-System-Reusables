import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'  // Use .tsx extension for TypeScript

const rootElement = document.getElementById('root') as HTMLElement; // Type assertion

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
