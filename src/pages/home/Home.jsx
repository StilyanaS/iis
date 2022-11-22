import React from "react"
import Header from "../../containers/header/Header"
import { About, Services, Contact, Blog } from "../../containers"
import { Brand, CTA } from "../../components/"
const Home = () => {
  return (
    <>
      <Header />
      <Brand />
      <About />
      <Services />
      <Contact />
      <CTA />
      <Blog />
    </>
  )
}

export default Home
