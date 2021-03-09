import Head from 'next/head'
import Footer from '../components/Footer'
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
        <p className=" col-4  border rounded-pill bor ">hello </p>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
