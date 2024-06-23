/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Image2 from "../assets/bandmember.jpg"
import Image3 from "../assets/avatar_g2.jpg"
import { useEffect } from "react"

const About = ({setActiveSection, aboutRef }) => {

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

    observer.observe(aboutRef.current)

    return () => {
      observer.unobserve(aboutRef.current);
    };

  }, [])

  return (
    <div id="about" ref={aboutRef} className="pt-[50px]">

      <div className="w-[90vw] sm:w-[75vw] lg:w-[65vw] mx-auto flex flex-col gap-y-10">

        {/* Name */}
        <div className="flex flex-col gap-y-5">

          <h1 className="text-[30px]">My Name</h1>

          <hr className="w-[300px]" />

          <p className="text-justify">Hello, I'm John Doe. I'm a photographer and web designer with a passion for capturing the beauty of everyday moments and creating visually stunning websites.
            <br />
            <br />
            I have years of experience in photography, specializing in portraits, landscapes, and event photography. My goal is to capture the essence of every moment and tell a story through my lens.
            <br />
            <br />
            As a web designer, I focus on creating user-friendly and aesthetically pleasing websites. I believe that a good design should not only look great but also provide a seamless experience for users.
            <br />
            <br />
            I love combining my skills in photography and web design to create unique and engaging online portfolios for my clients. I’m always looking for new challenges and opportunities to grow.</p>

        </div>

        {/* Skills */}
        <div className="flex flex-col gap-y-4">

          <h1 className="text-[30px]">My Skills</h1>

          <span>Photography</span>

          <div className="flex h-[30px]">

            <div className="w-[93%] bg-[#3498db] text-white flex justify-center items-center">93%</div>
            <div className="w-[7%] bg-white"></div>

          </div>

          <span>Web Design</span>

          <div className="flex h-[30px]">

            <div className="w-[85%] bg-[#3498db] text-white flex justify-center items-center">85%</div>
            <div className="w-[15%] bg-white"></div>

          </div>

          <span>Photoshop</span>

          <div className="flex h-[30px]">

            <div className="w-[80%] bg-[#3498db] text-white flex justify-center items-center">80%</div>
            <div className="w-[20%] bg-white"></div>

          </div>

          <div className="bg-white text-black flex flex-col sm:flex-row justify-evenly items-center gap-y-3 sm:gap-x-2 py-[15px] px-[5px] mt-3">

            <div className="flex flex-col justify-center items-center">
              <p className=" text-[24px]">11+</p>
              <p>Partners</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className=" text-[24px]">55+</p>
              <p>Projects Done</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className=" text-[24px]">89+</p>
              <p>Happy Clients</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className=" text-[24px]">150+</p>
              <p>Meetings</p>
            </div>

          </div>

        </div>

        {/* Price */}
        <div className="flex flex-col gap-y-5">

          <h1 className="text-[30px]">My Price</h1>

          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-5">

            <div className="col-span-1 bg-white text-black">

              <h1 className="bg-[#3498db] py-[20px] text-[24px] flex justify-center text-white">Basic</h1>

              <p className="flex justify-center py-[15px]">Web Design</p>
              <hr />
              <p className="flex justify-center py-[15px]">Photography</p>
              <hr />
              <p className="flex justify-center py-[15px]">5GB Storage</p>
              <hr />
              <p className="flex justify-center py-[15px]">Mail Support</p>
              <hr />

              <div className="flex flex-col items-center py-[15px]">
                <p className="text-[30px]">$ 10</p>
                <p className="text-[#757575]">per day</p>
              </div>

              <div className="flex justify-center bg-[#f1f1f1] py-[15px]">
                <button className="bg-[#3498db] py-[10px] px-[18px] hover:bg-[#2980b9] text-white">Sign Up</button>
              </div>

            </div>

            <div className="col-span-1 bg-white text-black">

              <h1 className="bg-[#3498db] py-[20px] text-[24px] flex justify-center text-white">Pro</h1>

              <p className="flex justify-center py-[15px]">Web Design</p>
              <hr />
              <p className="flex justify-center py-[15px]">Photography</p>
              <hr />
              <p className="flex justify-center py-[15px]">50GB Storage</p>
              <hr />
              <p className="flex justify-center py-[15px]">Endless Support</p>
              <hr />

              <div className="flex flex-col items-center py-[15px]">
                <p className="text-[30px]">$ 25</p>
                <p className="text-[#757575]">per day</p>
              </div>

              <div className="flex justify-center bg-[#f1f1f1] py-[15px]">
                <button className="bg-[#3498db] py-[10px] px-[18px] hover:bg-[#2980b9] text-white">Sign Up</button>
              </div>

            </div>


          </div>
        </div>

        {/* Reputation */}
        <div className="flex flex-col gap-y-7">

          <h1 className="text-[30px]">My Reputation</h1>

          <div className="flex items-center gap-x-3">

            <img src={Image2} alt="img" className="w-[80px] h-[80px] rounded-full" />

            <div className="flex flex-col sm:gap-y-4">
              <p>Chris Fox.   CEO at Mighty Schools.</p>
              <p>John Doe saved us from a web disaster.</p>
            </div>

          </div>

          <div className="flex items-center gap-x-3">

            <img src={Image3} alt="img" className="w-[80px] h-[80px] rounded-full" />

            <div className="flex flex-col sm:gap-y-4">
              <p>Rebecca Flex.   CEO at Company.</p>
              <p>No one is better than John Doe.</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default About
