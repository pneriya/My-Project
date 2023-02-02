import React from 'react'


import {About,Footer,Header,Skills,Cv,Work} from './mycontainer'
import {Navbar} from './mycomponents'
import './App.scss'

const App = () => {
  return (
    <div className="app" >
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/*<Cv/>*/}
      <Footer/>

    </div>
  )
}

export default App

