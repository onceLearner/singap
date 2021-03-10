import React from 'react'
import Image from "next/image"

const Footer = () => {
    return (
        <div className="  flex flex-wrap space-y-5   items-center  justify-around pb-5 pt-2  text-white w-full" style={{ backgroundColor: "#0964CC" }}>


            <div>
                <Image src="/Home.png" width="200" height="100" />
            </div>



            <div className="flex flex-col space-y-3  ">
                <div className="flex space-x-4 ">
                    <svg className=" w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <p>
                        lorem impoes linkem dimen
                    </p>
                </div>
                <div className="flex space-x-4 ">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p>
                        exemaple@gmail.com
                    </p>

                </div>

            </div>



            <div className="flex flex-col space-y-4">
                <p className="">
                    Kategori
                </p>
                <div className="  flex flex-wrap  space-x-4 md:space-y-0    " >

                    <button className=" p-2 w-40  bg-white text-gray-800 rounded-3xl">
                        Aspirasi
                    </button>
                    <button className=" p-2 w-40  bg-white text-gray-800 rounded-3xl">
                        Aspirasi
                    </button>




                </div>


            </div>


        </div>
    )
}

export default Footer
