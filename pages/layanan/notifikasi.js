import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import Footer from '../../components/Footer'
import Header from '../../components/layanan/header'

const user = { nama: "Naruto", alamat: "dea konoha", nik: "09294980980945", agama: "isla m", jenis: "Laki-laki" }

const arr = ["surat pengantar    E-KTP", "Surat Pengantar   SKCK", "Surat Pengantar KIA", "Akta Kelahiran ", "Akta Kematian", "Surat Keterangan Keluar Masuk Desa", "SKTM", "Pengantar Nikah"]



const Notifikasi = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [sideBarVisible, setSideBarVisible] = useState(false)

    return (
        <div className="flex flex-col   min-h-screen w-full">

            <Header user={user} />



            <main className="flex-1 flex h-screen     ">

                <div className={` ${sideBarVisible ? 'absolute top-0 right-0 left-0 bottom-0  z-40 flex flex-col' : 'hidden'}  md:flex    flex-col flex-0   text-gray-200 md:w-72   `} style={{ backgroundColor: "#0964CC" }}>

                    <h4 className="text-2xl  w-full p-2 px-6 bg-blue-500  mb-1 ">Biodata</h4>
                    <h3 className="text-2xl   px-6 ">pelayanan </h3>

                    {
                        arr.map(title => (
                            <span className="text-sm pt-2 justify-start px-10 ">
                                {title}
                            </span>
                        ))
                    }


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





                <div className="flex flex-col flex-1  items-center space-y-3 mt-10   ">
                    <div>
                        <Image src="/sideMan.png" width="150" height="150" className="rounded-full mb-10 mt-4" />
                    </div>
                    <div className="flex flex-col w-full md:w-80 space-y-3 px-3 ">
                        <div className="flex justify-between ">
                            <label >Nama Lengkap </label>
                            <span>{user.nama}</span>
                        </div>

                        <div className="flex justify-between">
                            <label >Alamat </label>
                            <span>{user.alamat}</span>
                        </div>

                        <div className="flex justify-between">
                            <label >Nik </label>
                            <span>{user.nik}</span>
                        </div>

                        <div className="flex justify-between">
                            <label >Agama </label>
                            <span>{user.agama}</span>
                        </div>

                        <div className="flex justify-between">
                            <label >Jenis Kelamiin</label>
                            <span>{user.jenis}</span>
                        </div>
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
