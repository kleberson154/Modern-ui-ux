import {
  Blog,
  Features,
  Footer,
  Possibility,
  Header,
  WhatGPT3
} from './containers'
import { Brand, CTA, Navbar } from './components'
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}
