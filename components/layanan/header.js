import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Header = ({ user }) => {
    const [dropDownModal, setDropDownModal] = React.useState(false)

    return (
        <div className="flex  w-full  items-center   ">

            <div className="flex    md:w-72     md:space-x-0 space-x-12 md:p-0    " style={{ backgroundColor: "#0964CC" }}>

                <Link href="/" >

                    <Image src="/Home.png" width="200" className="cursor-pointer" height="80" priority />

                </Link>

            </div>

            <div className="flex flex-1  h-full  justify-between  mb-4   border-gray-200  ">
                <span></span>
                <div className="flex space-x-2  items-center mr-4  ">
                    <Image src="/sideMan.png" width="50" height="50" className=" rounded-full" />

                    <span className="text-gray-400"> Hallo,</span>
                    <span>{user.nama}!</span>
                    <button className="transform rotate-90 py-2 px-2 focus:outline-none text-xl font-bold  text-gray-400 hover:text-blue-700 hover:border  " onClick={() => setDropDownModal(!dropDownModal)}>
                        {dropDownModal ? 'x' : `>`}
                    </button>

                    {
                        dropDownModal &&
                        <div className="absolute top-16 right-6 z-10 shadow-2xl  border border-gray-100  w-48  bg-white rounded-xl  flex flex-col space-y-1">
                            <Link href="/layanan/home">
                                <button className="hover:bg-gray-100 py-1 rounded-3xl "> Pengaturan</button>
                            </Link>
                            <Link href="/">
                                <button className="hover:bg-gray-100 py-1 rounded-3xl " > keluar </button>
                            </Link>

                        </div>
                    }
                </div>



            </div>

        </div>
    )
}

export default Header
