import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Clock, User } from "react-feather"

const TerbaruBer = ({ data }) => {
    return (
        <Link href={`/artikel/${data.title}`}>
            <div className="flex flex-col p-5 space-y-2 w-full md:w-80 cursor-pointer hover:opacity-80 transition-opacity duration-150   justify-around shadow-lg rounded-xl" >
                <Image src={data.imgUrl} width="300" height="200" />
                <h3 className="text-2xl  text-bold ">{data.title}</h3>
                <div className="text-gray-400 flex space-x-4 md:text-sm text-xs ">
                    <span className="flex  items-center  space-x-3"> <Clock className="w-4 h-4 " /> {data.date}  </span>
                    <span className="flex  items-center  space-x-3"> <User className="w-4 h-4 " /> {data.username}</span>

                </div>


            </div>
        </Link>
    )
}

export default TerbaruBer
