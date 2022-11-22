import Home from "./pages/home/Home"
import { Brand, CTA, Navbar } from "./components"
import { About, Blog, Contact, Footer, Header, Services } from "./containers"
import "./App.css"
import ServiceHeaderContainer from "./containers/textInColumns/TextInColumns"
import Collaborators from "./pages/collaborators/Collaborators"
import AboutPage from "./pages/about/AboutPage"
import Serv from "./pages/services/Services"
import Service from "./pages/service/Service"
import ContactPage from "./pages/contact/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Serv />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Header /> */}
            {/* <ContactPage /> */}
            <Route path="/collaborators" element={<Collaborators />} />

            {/* <AboutPage /> */}
            {/* <Service /> */}
          </Routes>
        </div>
        {/* <Brand />
      <About />
      <Services />
      <Contact />
      <CTA />
      <Blog />
      <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
