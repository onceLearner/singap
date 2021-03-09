import React from 'react'
import Link from "next/link"
import Image from "next/image"


const tabs = ["beranda", "profile", "lembaga", "statistik", "publikasi", , "BUMdes", "Letter c", "forum", "pelaporan"]

const Navigation = (props) => {
    const [visble, setVisible] = React.useState(false)
    return (
        <div className="flex-0 flex w-full    flex-col  ">

            <div className="flex    justify-between md:space-x-0 space-x-12 md:p-0 p-2   " style={{ backgroundColor: "#0964CC" }}>
                <Link href="#" >

                    <Image src="/Home.png" width="200" height="100" priority />

                </Link>
                <div className="  flex flex-wrap space-x-3 items-center  md:pr-5 p-0   " >
                    <button className=" p-2  px-6    font-semibold  text-gray-100 rounded-3xl">
                        Aspirasi
                    </button>
                    <button className="p-2  px-6  border border-gray-100 text-gray-100 rounded-3xl">
                        Bspirami
                    </button>


                </div>
            </div>




            <div>

                <ul className=" md:flex   gap-12 hidden     ">



                    {tabs.map(tab =>

                        <a key={tab} className="flex space-x-4 items-center" >
                            <li className={` text-blue-700 hover:text-blue-300  transition duration-150 bg-white   font-medium cursor-pointer `} > {tab}</li>
                            <svg className="w-6 h-6 text-blue-700">
                                <polygon points="225,10 100,210 350,210" />
                            </svg>
                        </a>

                    )}



                </ul>
                <div className="md:hidden cursor-pointer hover:text-red-500" onClick={() => setVisible(true)}>
                    <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </div>
                <div className={visble ? `z-10 absolute bg-white right-0 left-0 top-0 h-full` : `hidden`}>
                    <p className="p-2 text-red-500 text-lg cursor-pointer " onClick={() => setVisible(false)}>x </p>
                    <div className="flex flex-col justify-center items-center gap-6">
                        {tabs.map(tab =>

                            <Link key={tab} href={`/${tab.trim().replace(" ", "")}`} >
                                <button className={` text-gray-600 hover:text-red-500 focus:outline-none transition duration-150 bg-white  text-base font-medium cursor-pointer ${tab == "Sign In" && `text-red-400  py-2 ring-2 ring-red-400 w-20 rounded-full  `}   `} style={{ fontFamily: "Montserrat" }}> {tab}</button>
                            </Link>

                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navigation