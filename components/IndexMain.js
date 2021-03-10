import React from 'react'
import { DataTerbaruAgen, DataTerbaruBer, DataTerbaruPub } from "../data/DataHome"
import TerbaruAgend from './home/TerbaruAgend'
import TerbaruBer from './home/TerbaruBer'
import TerbaruPub from './home/TerbaruPub'

const IndexMain = () => {
    return (
        <div className="flex flex-col h-full space-y-12">

            <div className="Section1 flex flex-col  space-y-10 items-start">
                <h2 className="text-4xl font-bold uppercase px-2 border-l-4 border-blue-800">Berita terbaru</h2>
                <div className="flex flex-wrap  md:space-x-10  justify-around">
                    {DataTerbaruBer.map(item => (
                        <TerbaruBer data={item} />
                    ))
                    }
                </div>

            </div>

            <div className="Section2 flex flex-col  space-y-10 items-start">
                <h2 className="text-4xl font-bold uppercase px-2 border-l-4 border-blue-800">Publikasi terbaru</h2>
                <div className="flex flex-col   space-y-8 justify-around">
                    {DataTerbaruPub.map(item => (
                        <TerbaruPub data={item} />
                    ))
                    }
                </div>

            </div>

            <div className="Section3 flex flex-col  space-y-10 items-start">
                <h2 className="text-4xl font-bold uppercase px-2 border-l-4 border-blue-800">Berita Agenda</h2>
                <div className="flex flex-wrap  md:space-x-10  justify-around">
                    {DataTerbaruAgen.map(item => (
                        <TerbaruAgend data={item} />
                    ))
                    }
                </div>

            </div>

        </div>
    )
}

export default IndexMain
