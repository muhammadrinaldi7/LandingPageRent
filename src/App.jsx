import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LayoutContent } from "./Components/Layout"
import logo from "./assets/img/logmr.jpeg"
import axios from "axios"
import { useEffect, useState } from "react"
import { faHeadset, faMicrochip, faNetworkWired, faShield } from "@fortawesome/free-solid-svg-icons"
import { CardMobil } from "./Components/CardMobil"

const App = () => {
const listMenu = ['Home','Mobil' , 'Services'];
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
              href="#Mobil"
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Cek Mobil
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
            <CardMobil judul={car.make} tittle={car.model} harga={car.price} tipe={car.transmission} />
          )))}

        </div>
      </div>
    </section>
    <section id="Services">
      <div className="flex justify-center w-full min-h-screen px-8 py-8 bg-white ">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <div className="mx-auto text-center lg:mx-4 lg:text-left ">
          <h2 className="text-3xl font-bold sm:text-4xl">Kenapa Memilih Kami ?</h2>

          <p className="mt-4 text-gray-600">
          Kami menawarkan berbagai solusi transportasi termasuk rental mobil yang aman dan nyaman dengan pilihan kendaraan yang lengkap, reservasi yang mudah, pengelolaan armada yang efisien, asuransi yang komprehensif, serta layanan pelanggan yang andal.
          </p>

         
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <a
            className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span className="inline-block p-3 rounded-lg bg-gray-50">
              <FontAwesomeIcon icon={faNetworkWired} className="size-6" />
            </span>

            <h2 className="mt-2 font-bold">Akses Mudah dan Jaringan Luas</h2>

            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>

          <a
            className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span className="inline-block p-3 rounded-lg bg-gray-50">
              <FontAwesomeIcon icon={faMicrochip} className="size-6" />
            </span>

            <h2 className="mt-2 font-bold">Dilengkapi Teknologi Terpercaya</h2>

            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>

          <a
            className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span className="inline-block p-3 rounded-lg bg-gray-50">
            <FontAwesomeIcon icon={faShield} className="size-6" />
            </span>

            <h2 className="mt-2 font-bold">Layanan Terbaik dengan Jaminan Proteksi</h2>

            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>

          <a
            className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span className="inline-block p-3 rounded-lg bg-gray-50">
              <FontAwesomeIcon icon={faHeadset} className="size-6" />
            </span>

            <h2 className="mt-2 font-bold">Layanan Pelanggan 24/7</h2>

            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>

        </div>
      </div>
      </div>
    </section>
    </LayoutContent>
    </>
  )
}

export default App

// https://docs.google.com/forms/d/e/1FAIpQLSe7J8W-uDW8W9FW_yNwcPtojjPkH9T07Au2lWL8ZU8KJbufqA/viewform