import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import HistoricoPage from './pages/HistoricoPage'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/historico' element={ <HistoricoPage /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
