import React from 'react'
import classes from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import Currency from './pages/Currency/Currency'
import Header from './components/Header/Header'
import Exchanges from './pages/Exchanges/Exchanges'
import Main from './pages/Main/Main'

function App() {
  return (
    <div className={classes.App}>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currency/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
      </Routes>
    </div>
  )
}

export default App
