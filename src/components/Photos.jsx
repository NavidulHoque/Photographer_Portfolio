/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Image1 from "../assets/wedding.jpg"
import Image2 from "../assets/underwater.jpg"
import Image3 from "../assets/rocks.jpg"
import Image4 from "../assets/chef.jpg"
import Image5 from "../assets/wedding.jpg"
import Image6 from "../assets/sailboat.jpg"
import Image7 from "../assets/p6.jpg"
import { useEffect } from "react"

const Photos = ({setActiveSection, photosRef}) => {

  useEffect(() => {

    const observer = new IntersectionObserver(function (item) {
      if (item[0].isIntersecting) {
        console.log(item[0].target.id)
        setActiveSection(item[0].target.id)
      }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    })

    observer.observe(photosRef.current)

    return () => {
      observer.unobserve(photosRef.current);
    };

  }, [])
  
  return (
    <div id="photos" ref={photosRef} className="pt-[50px]">

      <div className="w-[90vw] sm:w-[75vw] lg:w-[65vw] mx-auto flex flex-col gap-y-5">

        <h1 className="text-[30px]">My Photos</h1>

        <hr className="w-[300px]" />

        <div className="grid grid-cols-2 grid-rows-5 gap-3">

          <div className="row-span-1"><img className="w-full h-full" src={Image1} alt="" /></div>
          <div className="row-span-2"><img className="w-full h-full" src={Image2} alt="" /></div>
          <div className="row-span-3"><img className="w-full h-full" src={Image3} alt="" /></div>
          <div className="row-span-1"><img className="w-full h-full" src={Image4} alt="" /></div>
          <div className="row-span-1"><img className="w-full h-full" src={Image5} alt="" /></div>
          <div className="row-span-1"><img className="w-full h-full" src={Image6} alt="" /></div>
          <div className="row-span-1"><img className="w-full h-full" src={Image7} alt="" /></div>

        </div>

      </div>

    </div>
  )
}

export default Photos
