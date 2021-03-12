import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Header = ({ user }) => {
    const [dropDownModal, setDropDownModal] = React.useState(false)

    return (
        <div className="flex justify-between w-full   ">

            <div className="flex    md:w-72    justify-between md:space-x-0 space-x-12 md:p-0 p-2   " style={{ backgroundColor: "#0964CC" }}>

                <Link href="/" >

                    <Image src="/Home.png" width="200" className="cursor-pointer" height="60" priority />

                </Link>

            </div>

            <div className="flex flex-1  h-full  justify-between p-3 mb-4  ">
                <span></span>
                <div className="flex space-x-2  items-center mr-4">
                    <Image src="/sideMan.png" width="55" height="55" className=" rounded-full" />

                    <span className="text-gray-400"> Hallo,</span>
                    <span>{user.nama}!</span>
                    <button className="transform rotate-90 " onClick={() => setDropDownModal(!dropDownModal)}>
                        {`>`}
                    </button>
                    {dropDownModal &&
                        <div className="absolute top-16 right-6 z-10 shadow-2xl  border  w-36  bg-white rounded-3xl  flex flex-col space-y-3">
                            <button className="hover:bg-gray-100 py-1 rounded-3xl "> Pengaturan</button>
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
