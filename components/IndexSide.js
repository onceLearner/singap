import React from 'react'
import { DataSideTerpo, DataTerbaruAgen, DataTerbaruBer, DataTerbaruPub } from "../data/DataHome"
import SideTerpo from './home/SideTerpo'
import TerbaruAgend from './home/TerbaruAgend'

import TerbaruPub from './home/TerbaruPub'

const IndexSide = () => {
    return (
        <div className="flex flex-col h-full space-y-12">



            <div className="Section1 flex flex-col  space-y-10 items-start">
                <h2 className="text-4xl font-bold uppercase px-2 border-l-4 border-blue-800">berita terpopuler</h2>
                <div className="flex flex-col   space-y-8 justify-around">
                    {DataSideTerpo.map(item => (
                        <SideTerpo data={item} />
                    ))
                    }
                </div>

            </div>


            <div className="flex flex-col     space-y-10">
                {DataTerbaruAgen.map(item => (
                    <TerbaruAgend data={item} />
                ))
                }


            </div>

        </div>
    )
}

export default IndexSide

