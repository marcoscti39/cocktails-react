import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContextProvider from './context'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'

import './styles/reset.css'
import CocktailsDetails from './pages/CocktailsDetails'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<App />}/>
          <Route path='about' element={<About/>}/>
          <Route path='cocktail/:cocktailId' element={<CocktailsDetails/>}/>

        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
