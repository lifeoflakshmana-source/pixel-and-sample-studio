import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MotionConfig } from "framer-motion"

if ("requestIdleCallback" in window) {
  requestIdleCallback(() => {
    console.log("Idle Loaded")
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="always">
    <App />
  </MotionConfig>
  </StrictMode>,
)
