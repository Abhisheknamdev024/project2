import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/About/About'
import Services from './components/services/Services'
import Mywork from './components/Works/Mywork'
import Contect from './components/contact/Contect'
import Footer from './components/Footer/Footer'

export const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contect/>
      <Footer/>
    </div>
  )
}
