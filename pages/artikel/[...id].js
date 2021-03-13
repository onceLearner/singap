import React from 'react'
import { DataTerbaruBer } from '../../data/DataHome'
import { Clock, User } from "react-feather"

import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,

    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    InstapaperIcon

} from "react-share";

import Head from 'next/head'
import Image from "next/image"
import Footer from '../../components/Footer'
import IndexMain from '../../components/IndexMain'
import IndexSide from '../../components/IndexSide'
import Navigation from '../../components/Navigation'
import styles from '../../styles/Home.module.css'
import ShareSocial from '../../components/artikel/social';
import { DataReplies } from '../../data/DataArtikel';
import ReplyCard from '../../components/artikel/ReplyCard';

let ArticleUrl;
if (process.browser) ArticleUrl = window.location.href;


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

                        <ShareSocial ArticleUrl={ArticleUrl} />
                        <div className="py-4">

                            <div className="flex  space-x-4 md:p-4 w-full mb-8">
                                <Image className="flex-0" src={"/sideMan.png"} width="100" height="65" objectFit="cover" />
                                <div className="border flex justify-between px-5 border-gray-300 rounded-lg p-2 flex-1">
                                    <input className="flex-1 focus:outline-none" type="text" placeholder="tembahtan commentar" />
                                    <button className="text-blue-400 underline font-semibold flex-0">Kirim</button>
                                </div>
                            </div>


                            <p className="text-xl font-semibold">{DataReplies.find(dr => dr.article_id == article.article_id).replies.length} Commenties</p>
                        </div>
                        <div className="border-t border-gray-400 py-3 ">
                            {
                                DataReplies.find(dr => dr.article_id == article.article_id).replies.map(rep => (
                                    <div>
                                        <ReplyCard reply={rep} />
                                    </div>
                                ))
                            }

                        </div>

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

    const article = DataTerbaruBer.find(dt => dt.article_id = params.id[3]);
    return {
        props: {
            article
        },

        // allows us to the ISR= SSR + SSG
        revalidate: 1,
    }


}

export async function getStaticPaths() {



    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];



    const allArticles = DataTerbaruBer;

    const paths = []

    allArticles.forEach(art => {
        let date = new Date(art.date);


        let route = {
            year: date.getFullYear().toString(),
            month: monthNames[date.getMonth()],
            day: date.getDate().toString(),
            art_id: art.article_id
        }



        paths.push({
            params: {

                id: [
                    route.year,
                    route.month,
                    route.day,
                    route.art_id
                ]

            }

        })

    })





    return {
        paths
        ,
        // temporary
        fallback: false

    }


}