import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import Footer from '../../components/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginModal from '../../components/loginModal';
import axios from "axios"
import { rightUrl } from '../../utils/methods';

import router from "next/router"




const handleRegister = (data) => {

}





const Registrari = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div className="flex flex-col   min-h-screen w-full">
            {modalVisible &&
                <LoginModal setModalVisible={setModalVisible} />
            }
            <div className="flex     justify-between md:space-x-0 space-x-12 md:p-0 p-2   " style={{ backgroundColor: "#0964CC" }}>

                <Link href="/" >

                    <Image src="/Home.png" width="200" className="cursor-pointer" height="80" priority />

                </Link>

            </div>


            <main className="flex-1 flex flex-col items-center  my-6  px-2  md:px-10">
                <h2 className="text-4xl font-semibold py-6">Daftar Sekarang </h2>
                <div className=" w-full md:w-3/6 md:p-8 ">
                    <Formik
                        initialValues={{ nama: '', alamat: '', nik: "", password: "", agama: "", jenis: "Laki-laki" }}
                        validate={values => {
                            const errors = {};
                            if (!values.nama || !valueS.nik || !values.agama || !values.jenis || !values.password) {
                                errors.nama = 'Required';
                                // or any other checks
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {

                            setSubmitting(true)
                            axios.post(rightUrl("api/signup"), values)
                                .then(res => {
                                    if (res.data.token) {
                                        document.cookie = `usertoken=${res.data.token}`
                                        router.push("/layanan/home")
                                    }
                                    setSubmitting(false)

                                })
                                .catch(e => console.error(e))
                            setSubmitting(false)



                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="flex flex-col   space-y-5  ">
                                <div className="flex flex-col space-y-1">
                                    <label className="capitalize" htmlFor="nama" >nama Lengkap</label>
                                    <Field className="p-2 border-b   " type="text" name="nama" placeholder=" masuka  nama Lengkap" />
                                    <ErrorMessage className="text-red-600" name="nama" component="div" />

                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="capitalize" htmlFor="alamat" >Alamat</label>
                                    <Field className="p-2 border-b   " type="text" name="alamat" placeholder="masukan Alama" />
                                    <ErrorMessage className="text-red-600" name="alamat" component="div" />

                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="capitalize" htmlFor="nik" >Nik</label>
                                    <Field className="p-2 border-b   " type="text" name="nik" placeholder="masukan Nik" />
                                    <ErrorMessage className="text-red-600" name="nik" component="div" />

                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="capitalize" htmlFor="password" >password</label>
                                    <Field className="p-2 border-b   " type="password" name="password" placeholder="masukan password" />
                                    <ErrorMessage className="text-red-600" name="password" component="div" />

                                </div>


                                <div className="flex flex-col space-y-1">
                                    <label className="capitalize" htmlFor="agama" >agama</label>
                                    <Field className="p-2 border-b   " type="text" name="agama" placeholder="masukan agama" />
                                    <ErrorMessage className="text-red-600" name="agama" component="div" />

                                </div>
                                <div className="flex  items-center  justify-around  p-2">
                                    <label className="capitalize text-lg font-medium " htmlFor="jenis" >Jenis Kelamin</label>
                                    <span className="flex items-center space-x-2">
                                        <Field className="p-2 border-b  " type="radio" name="jenis" value="Laki-laki" />
                                        <span>  Laki-laki</span>
                                    </span>
                                    <span className=" flex items-center space-x-2">
                                        <Field className="p-2 border-b  " type="radio" name="jenis" value="Perempuan" />
                                        <span> Perempuan</span>
                                    </span>
                                    <ErrorMessage className="text-red-600" name="jenis" component="div" />

                                </div>


                                <div className=" flex flex-col items-center justify-center space-y-3">
                                    <button type="submit" className=" w-40 p-2 text-xl md:text-lg bg-blue-600 hover:bg-blue-500   text-gray-50 font-semibold  rounded-3xl"  >
                                        Submit
                                </button>

                                    <span className="text-gray-400">
                                        Sudah memiliki akun ? <span onClick={() => setModalVisible(true)} className="underline text-blue-600 font-medium cursor-pointer hover:text-blue-400">Login di sin </span>
                                    </span>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

            </main>



            <footer className="flex flex-col ">
                <Footer />
            </footer>
        </div >
    )
}

export default Registrari
