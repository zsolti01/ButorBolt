import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Card from './components/Card/card'
import Rolunk from './assets/boutus.jpg'
import Termekek from './assets/termekek.jpg'
import News from './assets/news.jpg'

function App() {  
  return (
    <>
      <Header />

      <div className='kartyak'>
        <Card imgUrl={Rolunk} title="Rólunk"/>
        <Card imgUrl={Termekek} title="Termékek"/>
        <Card imgUrl={News} title="Híreink"/>
      </div>
    </>
  )
}

export default App
