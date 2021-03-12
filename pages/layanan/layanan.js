import React, { useEffect } from "react"
import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"
import Footer from '../../components/Footer'


import Navigation from '../../components/Navigation'
import styles from '../../styles/Home.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const arr = ["surat pengantar    E-KTP", "Surat Pengantar   SKCK", "Surat Pengantar KIA", "Akta Kelahiran ", "Akta Kematian", "Surat Keterangan Keluar Masuk Desa", "SKTM", "Pengantar Nikah"]

const Layanan = () => {



    return (
        <div className={styles.container}>
            <Head>
                <title>Pelayanan</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <nav className="w-full">
                <Navigation page="pelayanan" />
            </nav>




            <main className="flex flex-1 flex-wrap p-4 items-center ">



                <div className=" flex flex-col flex-1 items-center  my-6    md:px-10">
                    <h2 className="text-4xl font-semibold py-6">Surat Pengantar E-KTP </h2>



                    <div className=" w-full md:w-5/6  md:p-8 mt-3 ">
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="flex flex-col   space-y-5  ">


                                    <div className="flex flex-col space-y-1">
                                        <label className="capitalize" htmlFor="nik" >Nik</label>
                                        <Field className="p-2 border-b   " type="text" name="nik" placeholder="masukan Nik" />
                                        <ErrorMessage className="text-red-600" name="nik" component="div" />

                                    </div>

                                    <div className="flex flex-col space-y-1">
                                        <label className="capitalize" htmlFor="file" > Surat Pengantar RT/RW</label>
                                        <Field className="p-2 border-b   " type="file" name="file" placeholder="surat pengantar RT/RW.jpg" />
                                        <ErrorMessage className="text-red-600" name="file" component="div" />

                                    </div>




                                    <div className="flex flex-col space-y-1">
                                        <label className="capitalize" htmlFor="kartu" >kartu Keluarga</label>
                                        <Field className="p-2 border-b   " type="text" name="kartu" placeholder="masukan nomor kartu keluarga anda" />
                                        <ErrorMessage className="text-red-600" name="kartu" component="div" />

                                    </div>



                                    <div className=" flex flex-col items-center justify-center space-y-3">
                                        <button type="submit" className=" w-40 p-2 text-xl md:text-lg bg-blue-600 hover:bg-blue-500   text-gray-50 font-semibold  rounded-3xl" disabled={isSubmitting}>
                                            Kirim
                                         </button>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                </div>


                <div className="flex flex-col flex-0  p-4">
                    <h3 className="text-2xl font-medium uppercase px-2 border-l-4 border-blue-800">pelayanan lainnya</h3>

                    {
                        arr.map(title => (
                            <span className="text-sm pt-2 justify-start ">
                                {title}
                            </span>
                        ))
                    }
                </div>



            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Layanan
