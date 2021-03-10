import React from 'react'
import Image from "next/image"
import { Clock, Eye } from "react-feather"

const SideTerpo = ({ data }) => {
    return (
        <div className="flex  justify-between space-x-3  p-4 items-center     space-y-2 cursor-pointer hover:opacity-80 transition-opacity duration-150    shadow-lg rounded-xl" >
            <Image src={data.imgUrl} objectFit="cover" className="" width="190" height="150" />

            <div className="flex flex-col     space-y-4  items-baseline  w-full h-full transform -translate-y-2" >
                <h3 className="text-md text-bold text-gray-800 underline  ">{data.title}</h3>
                <div className="flex justify-evenly text-gray-400  text-xs space-x-3">
                    <span className="flex  items-center  space-x-3"> <Clock className="w-4 h-4 " /> {data.date}  </span>
                    <span className="flex  items-center  space-x-3"> <Eye className="w-4 h-4 " /> {data.views}  </span>

                </div>
            </div>


        </div>
    )
}

export default SideTerpo
