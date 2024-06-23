/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Image from "../assets/man_smoke.jpg"
import { useEffect, useState } from "react"

const Navbar = ({activeSection, homeRef, aboutRef, contactRef, photosRef }) => {
  const initialStates = JSON.parse(localStorage.getItem("home")) || [true, false, false, false];

  const [home, setHome] = useState(initialStates[0]);
  const [about, setAbout] = useState(initialStates[1]);
  const [photos, setPhotos] = useState(initialStates[2]);
  const [contact, setContact] = useState(initialStates[3])

  useEffect(() => {

    localStorage.setItem("home", JSON.stringify([home, about, photos, contact]))

  }, [home, about, photos, contact])

  useEffect(() => {

    if (activeSection === "home") {
      setHome(true)
      setAbout(false)
      setPhotos(false)
      setContact(false)
    }

    else if (activeSection === "about") {
      setHome(false)
      setAbout(true)
      setPhotos(false)
      setContact(false)
    }

    else if (activeSection === "photos") {
      setHome(false)
      setAbout(false)
      setPhotos(true)
      setContact(false)
    }

    else if (activeSection === "contact") {
      setHome(false)
      setAbout(false)
      setPhotos(false)
      setContact(true)
    }

  }, [activeSection])

  function handleHome() {
    setHome(true)
    setAbout(false)
    setPhotos(false)
    setContact(false)
    handleRedirect(homeRef)
  }

  function handleAbout() {
    setHome(false)
    setAbout(true)
    setPhotos(false)
    setContact(false)
    handleRedirect(aboutRef)
  }

  function handlePhotos() {
    setHome(false)
    setAbout(false)
    setPhotos(true)
    setContact(false)
    handleRedirect(photosRef)
  }

  function handleContact() {
    setHome(false)
    setAbout(false)
    setPhotos(false)
    setContact(true)
    handleRedirect(contactRef)
  }

  function handleRedirect(ref) {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }

  return (
    <nav className="sm:col-span-2 lg:col-span-1 sm:h-screen sm:sticky fixed w-full top-0 left-0 bg-[rgba(0,0,0,0.5)] sm:bg-[#222] text-white">

      <ul className="flex flex-row sm:flex-col justify-center items-center">

        <li><img src={Image} alt="myself" className="opacity-[0.7] w-full hidden sm:inline-block" /></li>

        <li className="w-full"><a onClick={handleHome} className={`${home ? 'bg-black hover:bg-[#bdc3c7] hover:text-black' : 'hover:bg-black'} w-full flex flex-col items-center justify-center py-[8px] sm:py-[20px] gap-y-3 cursor-pointer`}><i className="fa fa-home text-[32px] hidden sm:inline-block"></i>Home</a></li>

        <li className="w-full"><a onClick={handleAbout} className={`${about ? 'bg-black hover:bg-[#bdc3c7] hover:text-black' : 'hover:bg-black'} w-full flex flex-col items-center justify-center py-[8px] sm:py-[20px] gap-y-3 cursor-pointer`}><i className="fa fa-user text-[32px] hidden sm:inline-block"></i>ABOUT</a></li>

        <li className="w-full"><a onClick={handlePhotos} className={`${photos ? 'bg-black hover:bg-[#bdc3c7] hover:text-black' : 'hover:bg-black'} w-full flex flex-col items-center justify-center py-[8px] sm:py-[20px] gap-y-3 cursor-pointer`}><i className="fa fa-eye text-[32px] hidden sm:inline-block"></i>PHOTOS</a></li>

        <li className="w-full"><a onClick={handleContact} className={`${contact ? 'bg-black hover:bg-[#bdc3c7] hover:text-black' : 'hover:bg-black'} w-full flex flex-col items-center justify-center py-[8px] sm:py-[20px] gap-y-3 cursor-pointer`}><i className="fa fa-envelope text-[32px] hidden sm:inline-block"></i>CONTACT</a></li>

      </ul>

    </nav>
  )
}

export default Navbar
