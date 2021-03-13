import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Clock, User } from "react-feather"

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];



const TerbaruBer = ({ data }) => {



    let date = new Date(data.date);
    let route = {
        year: date.getFullYear().toString(),
        month: monthNames[date.getMonth()],
        day: date.getDate().toString(),
        art_id: data.article_id
    }

    return (
        <Link href={`/artikel/${route.year}/${route.month}/${route.day}/${route.art_id}`}>
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
