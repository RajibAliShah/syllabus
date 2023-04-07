import Body from "./body/Body"
import Header from "./header/Header"
import React from 'react'
import Core from "./quarters/Core"
import Metaverse from "./quarters/Metaverse"
import About from "./quarters/About"
import Contact from "./quarters/Contact"

const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <Core />
      <Metaverse />
      <About />
      <Contact />
    </div>
  )
}

export default Home
