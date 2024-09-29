export const Footer = (props) => {
    const { listMenu,logo } = props;
    return (
        <>
        <footer className="bg-white/85">
        <div className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24">
            <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
                className="inline-block p-2 text-white transition bg-teal-600 rounded-full shadow hover:bg-teal-500 sm:p-3 lg:p-4"
                href="#Home"
            >
                <span className="sr-only">Back to top</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                />
                </svg>
            </a>
            </div>

            <div className="lg:flex lg:items-end lg:justify-between">
            <div>
                <div className="flex items-center justify-center gap-4 text-teal-600 lg:justify-start">
                <img src={logo} alt="logo" className="h-12"/> <p className="italic font-bold"><span className="text-red-600">Masedo</span> RentCar</p>
                </div>

                <p className="max-w-md mx-auto mt-6 leading-relaxed text-justify text-gray-500 lg:text-justify">
                 Masedo RentCar adalah perusahaan yang bergerak dibidang jasa sewa mobil banjarmasin. Dengan etos kerja yang profesional kami siap untuk layanan sewa mobil perseorangan ataupun rombongan dalam rangka liburan untuk wisata ke berbagai daerah banjarmasin ataupun dalam rangka kerja.
                </p>
            </div>

            <ul
                className="flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
            >{
                listMenu.map((item, index) => (
                    <li key={index}>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> {item} </a>
                    </li>
                ))
            }
            </ul>
            </div>

            <p className="mt-12 text-sm text-center text-gray-500 lg:text-right">
            Copyright &copy; 2024. Muhammad Rinaldi.
            </p>
        </div>
        </footer>
        </>
    )
}