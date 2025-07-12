import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'
import Portofolio from './Portofolio'
import ThanksPage from './components/ThanksPage'

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
        <Route path='/'element={<Dashboard/>}/>
        <Route path='/thanks' element={<ThanksPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App