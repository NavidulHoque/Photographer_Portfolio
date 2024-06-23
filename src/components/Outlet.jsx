/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from "./Home"
import Photos from "./Photos"

const Outlet = ({setActiveSection, homeRef, aboutRef, contactRef, photosRef }) => {
  return (
    <div className="bg-black text-white sm:col-span-10 lg:col-span-11">

      <Home setActiveSection={setActiveSection} homeRef={homeRef} />
      <About setActiveSection={setActiveSection} aboutRef={aboutRef} />
      <Photos setActiveSection={setActiveSection} photosRef={photosRef} />
      <Contact setActiveSection={setActiveSection} contactRef={contactRef} />
      <Footer />

    </div>
  )
}

export default Outlet
