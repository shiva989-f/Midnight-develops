import Home from "./components/Home"
import About from "./components/About"
import './App.css'
import Features from "./components/Features"
import WhyChooseUs from "./components/WhyChooseUs"
import Services from "./components/Services"
import OurTeam from "./components/OurTeam"
import Mockup from "./components/Mockup"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// import { domMax, LazyMotion, motion } from "framer-motion"

const App = () => {
  return (
    <div className="main-container">
      <Home />
      <About />
      <Features/>
      <WhyChooseUs/>
      <Services/>
      <Mockup/>
      <OurTeam/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App