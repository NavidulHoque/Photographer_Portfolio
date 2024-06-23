/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import Outlet from "./components/Outlet"
import Navbar from "./components/Navbar"
import { useEffect, useRef, useState } from "react"

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const photosRef = useRef(null)

  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-12 relative">

      <Navbar activeSection={activeSection} homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} photosRef={photosRef} />
      <Outlet setActiveSection={setActiveSection} homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} photosRef={photosRef} />

    </div>
  )
}

export default App
