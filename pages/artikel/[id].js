import React from 'react'
import { DataTerbaruBer } from '../../data/DataHome'
import { Clock, User } from "react-feather"

import Head from 'next/head'
import Image from "next/image"
import Footer from '../../components/Footer'
import IndexMain from '../../components/IndexMain'
import IndexSide from '../../components/IndexSide'
import Navigation from '../../components/Navigation'
import styles from '../../styles/Home.module.css'

export const Artikel = ({ article }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Artikel</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <nav className="w-full">
                <Navigation page="publikasi" />
            </nav>



            <main className={styles.main}>





                <div className="flex flex-wrap md:space-x-16 mt-4 mb-10 md:py-6  p-4 pl-6">
                    <div className="md:w-7/12 space-y-2 p-2 mb-7">
                        <h2 className="text-4xl font-bold uppercase px-2 mb-12 border-l-4 border-blue-800">Berita terbaru</h2>
                        <Image src={"/cabineImg.png"} objectFit="cover" layout="responsive" width="500" height="300" priority />
                        <h2 className="text-2xl font-semibold py-4"> {article.title}</h2>
                        <div className="text-gray-400 flex space-x-4 md:text-sm text-xs ">
                            <span className="flex  items-center  space-x-3"> <Clock className="w-4 h-4 " /> {article.date}  </span>
                            <span className="flex  items-center  space-x-3"> <User className="w-4 h-4 " /> {article.username}</span>

                        </div>
                        <p>
                            {article.text}

                        </p>


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


export default Artikel


export async function getStaticProps({ params }) {
    const article = DataTerbaruBer.find(dt => dt.title = params.id);
    return {
        props: {
            article
        }
    }


}

export async function getStaticPaths() {

    const allArticles = DataTerbaruBer;

    return {
        paths: [
            { params: { id: allArticles[0].title } },
            { params: { id: allArticles[1].title } }

        ]
        ,
        // temporary
        fallback: false

    }


}