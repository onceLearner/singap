import React from 'react'
import Image from "next/image"
import { Clock } from "react-feather"

const TerbaruAgend = () => {
    return (
        <div className="flex flex-col p-3" >
            <Image src="/cabineImg.png" width="300" height="200" />
            <div>
                <span> <Clock className="w-4 h-4 text-gray-400" />  </span>

            </div>


        </div>
    )
}

export default TerbaruAgend

