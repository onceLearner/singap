import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import Footer from '../../components/Footer'
import Header from '../../components/layanan/header'

const user = { nama: "Naruto", alamat: "dea konoha", nik: "09294980980945", agama: "isla m", jenis: "Laki-laki" }


const data = [{
    title: "Lorem nulla cillum exercitation laborum in ullamco",
    text: "Dolore veniam reprehenderit pariatur occaecat est consectetur tempor dolum inl .",
    date: "3 jam lalu"
},
{
    title: "Lorem nulla cillum exercitation laborum in ullamco",
    text: "Dolore veniam reprehenderit pariatur occaecat est consectetur tempor dolum inl .",
    date: "3 jam lalu"
},
{
    title: "Lorem nulla cillum exercitation laborum in ullamco",
    text: "Dolore veniam reprehenderit pariatur occaecat est consectetur tempor dolum inl .",
    date: "3 jam lalu"
},
{
    title: "Lorem nulla cillum exercitation laborum in ullamco",
    text: "Dolore veniam reprehenderit pariatur occaecat est consectetur tempor dolum inl .",
    date: "3 jam lalu"
}

]

const Notifikasi = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [sideBarVisible, setSideBarVisible] = useState(false)

    return (
        <div className="flex flex-col   min-h-screen w-full">

            <Header user={user} />



            <main className="flex-1 flex h-screen     ">

                <div className={` ${sideBarVisible ? 'absolute top-0 right-0 left-0 bottom-0  z-40 flex flex-col' : 'hidden'}  md:flex    flex-col flex-0   text-gray-100 md:w-72   `} style={{ backgroundColor: "#0964CC" }}>

                    <Link href="/layanan/home">
                        <h4 className="text-2xl   p-2 px-6   mb-1 ">Akun Saya</h4>
                    </Link>
                    <h3 className="text-2xl  bg-blue-500 w-full   px-6 py-2 ">Notifikasi </h3>




                    <div className={` ${sideBarVisible ? 'absolute top-10 right-0  z-50' : 'hidden'}  md:hidden `}>
                        <button onClick={() => setSideBarVisible(!sideBarVisible)} className="p-2 rounded-full px-4 mt-4  border-white border text-white" style={{ backgroundColor: "#0964CC" }}>close X</button>
                    </div>
                </div>

                <div className={`  md:hidden absolute top-20 right-0 `}>
                    <button onClick={() => setSideBarVisible(!sideBarVisible)} className="p-2 rounded-full px-4 mt-4  border-white border text-white" style={{ backgroundColor: "#0964CC" }}>

                        <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>





                <div className="flex flex-col flex-1  space-y-3 mt-16  ">

                    <div className="flex  justify-between  px-10 md:px-20 items-center text-2xl font-base w-full border-b border-gray-50 " >
                        <span className="border-b-2 border-blue-700 py-2"> Pemberitahuan</span>
                        <span> Respon </span>
                    </div>



                    <div className="flex flex-col  md:px-20 px-10 py-8  space-y-4">
                        {
                            data.map(notif => (
                                <div className="flex flex-wrap justify-start md:space-x-3">
                                    <div className="flex flex-col  space-y-2 md:w-1/2  ">
                                        <h3 className="text-lg ">{notif.title}</h3>
                                        <p className="text-sm ">{notif.text}</p>

                                    </div>
                                    <span className="text-gray-400">{notif.date}</span>
                                </div>
                            ))

                        }


                    </div>



                </div>


            </main>





            <footer className="flex flex-col  mt-10">
                <Footer />
            </footer>
        </div>
    )
}

export default Notifikasi
