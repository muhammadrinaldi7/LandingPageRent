export const CardMobil = (props) => {
    const { judul,tittle,harga,tipe } = props
    return (
        <a href="#" className="relative block border border-gray-100 rounded-tr-3xl">
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-80 h-80 rounded-tr-3xl"
            />

            <div className="p-4 text-center">
              <strong className="text-xl font-medium text-gray-900"> {judul} </strong><br />
              <strong className="text-xl font-medium text-gray-900"> {tittle} </strong>

              <p className="mt-2 text-gray-700 text-pretty">
              ${harga}
              </p>
              <p className="mt-2 text-gray-700 text-pretty">
              {tipe}
              </p>

              <span
                className="block px-5 py-3 mt-4 text-sm font-medium tracking-widest text-white uppercase transition-colors bg-indigo-900 border border-indigo-900 rounded-md hover:bg-white hover:text-indigo-900"
              >
                Learn More
              </span>
            </div>
          </a>
    )
}