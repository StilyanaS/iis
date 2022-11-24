import Home from "./pages/home/Home"
import { Navbar } from "./components"
import "./App.css"
import Collaborators from "./pages/collaborators/Collaborators"
import AboutPage from "./pages/about/AboutPage"
import Serv from "./pages/services/Services"
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
            <Route path="/collaborators" element={<Collaborators />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
