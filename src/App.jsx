import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Index from './pages/index/Index'
import Transfer from './pages/transfer/Transfer'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/transfer' element={<Transfer />}/>
      </Routes>
    </Router>
  )
}

export default App