import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Components/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Router>
      <Routing/>
    </Router>
  )
}

export default App
