import Head from 'next/head'
import Image from "next/image"
import Footer from '../components/Footer'
import IndexMain from '../components/IndexMain'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <nav className="w-full">
        <Navigation />
      </nav>



      <main className={styles.main}>

        <div className="mainImg  relative flex flex-col w-full   " style={{ height: "62vh" }}>
          <Image src="/mainImg.png" objectFit="cover" layout="fill" priority />

        </div>

        <div className="flex flex-wrap md:space-x-16 mt-4 mb-10 py-6 px-7">
          <IndexMain />


        </div>




      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
