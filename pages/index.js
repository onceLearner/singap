import React, { useEffect } from "react"
import Head from 'next/head'
import Image from "next/image"
import Footer from '../components/Footer'
import IndexMain from '../components/IndexMain'
import IndexSide from '../components/IndexSide'
import LoginModal from '../components/loginModal'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>despian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <nav className="w-full">
        <Navigation page="beranda" />
      </nav>



      <main className={styles.main}>

        <div className="mainImg  relative flex flex-col w-full   " style={{ height: "62vh" }}>
          <Image src="/mainImg.png" objectFit="cover" layout="fill" priority />

        </div>

        <div className="flex flex-wrap md:space-x-16 mt-4 mb-10 md:py-6  p-4 pl-6">
          <div className="md:w-7/12">
            <IndexMain />
          </div>
          <div className="md:w-4/12">
            <IndexSide />
          </div>


        </div>




      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
