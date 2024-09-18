import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex w-screen h-screen items-center justify-center text-sky-600'>hello world</div>
  </StrictMode>,
);
