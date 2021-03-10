import React from 'react'
import Image from "next/image"
import { Clock, User } from "react-feather"

const TerbaruAgend = ({ data }) => {
    return (
        <div className="flex flex-col p-5 md:w-80 w-full  space-y-2 cursor-pointer hover:opacity-80 transition-opacity duration-150   justify-around shadow-lg rounded-xl" >
            <Image src={data.imgUrl} width="300" height="200" />
            <h2 className="text-xl  font-bold  text-bold ">{data.title}</h2>

            <p className="text-sm  font-medium">{data.text}</p>



        </div>
    )
}

export default TerbaruAgend
