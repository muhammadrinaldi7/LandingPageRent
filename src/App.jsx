import { LayoutContent } from "./Components/Layout"
import logo from "./assets/img/logmr.jpeg"
import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
const listMenu = ['Home','Mobil' , 'Services', 'Testimonial','Gallery', 'ContactUs'];
const [isLoading, setisLoading] = useState(true)
const [cars,setCars] = useState([])

const getCars = () =>{
  axios.get('https://freetestapi.com/api/v1/cars')
    .then((res)=>setCars(res.data))
    .catch((error)=> console.log(error.response))
}
console.log(cars)
useEffect(() => {
  getCars();
  setTimeout(()=>{
    setisLoading(false)
  },2000)
},[])
  return (
    <>
    <LayoutContent listMenu={listMenu} logo={logo}>
    {/* HOME */}
    <section id="Home"
      className="relative w-full bg-[url(https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1727523566~exp=1727527166~hmac=8ac58eb2f9f5809903b8c93aa1f670827a002a5e367ea83d0953b6dcba9bb04c&w=1060)] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your

            <strong className="block font-extrabold text-rose-500"> Cars. </strong>
          </h1>

          <p className="max-w-lg mt-4 text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              href="#"
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="Mobil">
      <div className="px-4 py-8 mx-auto bg-white">
      <span className="flex items-center py-8 mb-4">
        <span className="flex-1 h-px bg-black"></span>
        <span className="px-6 text-2xl uppercase lg:text-4xl shrink-0">List Mobil Kami</span>
        <span className="flex-1 h-px bg-black"></span>
      </span>
        <div className="flex flex-col justify-center gap-4 px-6 md:flex-row md:flex-wrap">
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          cars.map((car) => (
          <a href="#" className="relative block border border-gray-100 rounded-tr-3xl">
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-80 h-80 rounded-tr-3xl"
            />

            <div className="p-4 text-center">
              <strong className="text-xl font-medium text-gray-900"> {car.make} </strong><br />
              <strong className="text-xl font-medium text-gray-900"> {car.model} </strong>

              <p className="mt-2 text-gray-700 text-pretty">
              ${car.price}
              </p>
              <p className="mt-2 text-gray-700 text-pretty">
              {car.transmission}
              </p>

              <span
                className="block px-5 py-3 mt-4 text-sm font-medium tracking-widest text-white uppercase transition-colors bg-indigo-900 border border-indigo-900 rounded-md hover:bg-white hover:text-indigo-900"
              >
                Learn More
              </span>
            </div>
          </a>
          )))}

        </div>
      </div>
    </section>
    <section id="Services">

    </section>
    </LayoutContent>
    </>
  )
}

export default App

// https://docs.google.com/forms/d/e/1FAIpQLSe7J8W-uDW8W9FW_yNwcPtojjPkH9T07Au2lWL8ZU8KJbufqA/viewform