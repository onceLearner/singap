import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"

import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginModal = (props) => {
    return (
        <div className="flex flex-col items-center" >

            <div className="absolute bg-black top-0 bottom-0 left-0 right-0 w-full h-full z-10 opacity-50"> </div>


            <div className="absolute  top-20  w-5/6 md:w-1/2    shadow-xl rounded-xl bg-white z-20 p-3 ">

                <button onClick={() => props.setModalVisible(false)} className="absolute   top-2     right-4   px-2 font-bold  border border-red-300 hover:border-red-600 text-red-300"> X</button>

                <main className=" flex flex-col items-center  my-6    md:px-10">
                    <h2 className="text-4xl font-semibold py-6">Silahkan login </h2>
                    <span className="text-gray-400">
                        Belum punya akun akun ?
                         <Link href="/layanan/registrasi" >d
                            <span className="underline text-blue-600 font-medium cursor-pointer hover:text-blue-400">
                                Daftar di sini
                            </span>
                        </Link>
                    </span>


                    <div className=" w-full  md:p-8 ">
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
                                        <label className="capitalize" htmlFor="password" >password</label>
                                        <Field className="p-2 border-b   " type="text" name="password" placeholder="masukan password" />
                                        <ErrorMessage className="text-red-600" name="password" component="div" />

                                    </div>
                                    <div className="flex  justify-between">
                                        <p></p>
                                        <button className="text-sm  underline capitalize  text-blue-600 hover:text-blue-400 " > Lupa password?</button>
                                    </div>


                                    <div className=" flex flex-col items-center justify-center space-y-3">
                                        <button type="submit" className=" w-40 p-2 text-xl md:text-lg bg-blue-600 hover:bg-blue-500   text-gray-50 font-semibold  rounded-3xl" disabled={isSubmitting}>
                                            Masuk
                                         </button>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                </main>



            </div>


        </div>
    )
}

export default LoginModal
