import React from 'react'
import Image from "next/image"
import { Clock, User } from "react-feather"

const TerbaruPub = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-between p-5 space-y-2 cursor-pointer hover:opacity-80 transition-opacity duration-150    shadow-lg rounded-xl" >
            <div >
                <h3 className="text-lg text-bold text-gray-800 ">{data.title}</h3>
                <h2 className="text-base  text-gray-700 text-bold ">{data.text} </h2>
                <p className="md:text-ms  text-gray-400 text-xs">{data.username}</p>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">{data.dateAgo}</p>

        </div>
    )
}

export default TerbaruPub
