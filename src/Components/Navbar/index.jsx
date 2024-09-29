import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export const Navbar = (props) => {
    const { logo, listMenu } = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="sticky top-0 z-10 px-10 shadow-lg navbar bg-white/85 drop-shadow-xl">
        <div className="navbar-start">
            <div className="flex items-center justify-center gap-4">
                <img src={logo} className="w-10" alt="" />
                <h1 className="italic font-bold whitespace-nowrap lg:whitespace-normal"><span className="text-red-600">Masedo</span> RentCar</h1>
            </div>
        </div>
        <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
                {listMenu.map((menu, index) => (
                    <li key={index}><a href={`#${menu}`}>{menu}</a></li>
                ))}
            </ul>
        </div>
        <div className="navbar-end">
            <a href='#Mobil' className="hidden italic btn lg:flex lg:text-center">Booking Sekarang!</a>
            <div className="lg:hidden">
                <FontAwesomeIcon className='p-3 bg-white/90 rounded-xl' onClick={() =>setIsOpen(!isOpen)} icon={faBars} />
                {isOpen ?
                    <ul className="menu fixed right-1 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {listMenu.map((menu, index) => (
                        <li key={index}><a href={`#${menu}`}>{menu}</a></li>
                    ))}
                    </ul> :
                    null
                }
            </div>
        </div>
        </div>
            
        </>
    )
}