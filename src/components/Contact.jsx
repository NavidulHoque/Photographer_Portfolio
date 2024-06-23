/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const Contact = ({setActiveSection, contactRef}) => {
  const [clientInfo, setClientInfo] = useState(JSON.parse(localStorage.getItem("clientInfo")) || [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState(false)

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

    observer.observe(contactRef.current)

    return () => {
      observer.unobserve(contactRef.current);
    };

  }, [])

  useEffect(() => {

    localStorage.setItem("clientInfo", JSON.stringify(clientInfo))

  }, [clientInfo])

  function handleSubmit(e) {
    e.preventDefault()

    setResponse(true)

    setTimeout(() => {
      setResponse(false)
    }, 3000);

    setClientInfo((prev) => [...prev, {name, email, subject, message}])
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <div id="contact" ref={contactRef} className="pt-[50px]">

      <div className="w-[90vw] sm:w-[75vw] lg:w-[65vw] mx-auto flex flex-col gap-y-5">

        <h1 className="text-[30px]">Contact Me</h1>

        <hr className="w-[300px]" />

        <div className="flex flex-col gap-y-3">

          <p className="flex items-center"><i className="fa fa-map-marker text-[36px] ml-[5px] mr-[30px]"></i> Chicago, US</p>
          <p className="flex items-center"><i className="fa fa-phone text-[36px] ml-[2px] mr-[25px]"></i> Phone: +00 151515</p>
          <p className="flex items-center"><i className="fa fa-envelope text-[36px] mr-[20px]"> </i> Email: mail@mail.com</p>

        </div>

        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-y-4 text-black mt-[20px]">

          <p className="text-white">Let's get in touch. Send me a message: <span className={`${response ? 'opacity-1' : 'opacity-0'} transition duration-700`}>Message Sent</span></p>
          
          <input className="outline-none py-[15px] px-[8px]" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" autoComplete="on" required />

          <input className="outline-none py-[15px] px-[8px]" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" autoComplete="on" required />

          <input className="outline-none py-[15px] px-[8px]" type="text" onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="Subject" autoComplete="on" required />
          
          <input className="outline-none py-[15px] px-[8px]" type="text" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Message" autoComplete="on" required />

          <button className="py-[12px] px-[10px] flex justify-center items-center bg-white hover:bg-[#ccc] w-[50%] md:w-[30%]" type="submit"><i className="fa fa-paper-plane mr-[4px]"></i>{"Send Message".toUpperCase()}</button>

        </form>

      </div>

    </div>
  )
}

export default Contact
