/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Image from "../assets/man_smoke.jpg"

const Home = ({setActiveSection, homeRef}) => {

    useEffect(() => {

        const observer = new IntersectionObserver(function(item) {
            if (item[0].isIntersecting) {
                console.log(item[0].target.id)
                setActiveSection(item[0].target.id)
              }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
          }) 
      
         observer.observe(homeRef.current)
    
        return () => {
        observer.unobserve(homeRef.current);
        };
    
      }, [])

  return (
    <div id="home" ref={homeRef} className="w-[90vw] sm:w-[75vw] lg:w-[65vw] mx-auto flex flex-col justify-center items-center gap-y-4 pt-[50px]">

        <h1 className="text-[64px] text-center">I'm John Doe.</h1>
        <p className="text-[15px]">Photographer and Web Designer.</p>
        <img src={Image} alt="myself" />

    </div>
  )
}

export default Home
