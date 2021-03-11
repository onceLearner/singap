import React from 'react'
import Image from "next/image"
import { ThumbsDown, ThumbsUp } from 'react-feather'

const ReplyCArd = ({ reply }) => {
    return (
        <div className="flex  space-x-4 md:p-4">
            <Image src={reply.imgUrl} width="100" height="55" objectFit="cover" />

            <div className="flex flex-col space-y-2">
                <div className="flex   space-x-4 items-center ">
                    <h3 className="text-xl font-semibold ">{reply.user}</h3>
                    <p className="text-gray-400" >{reply.timeAgo}</p>
                </div>

                <p className="text-base">{reply.text}</p>
                <div className="flex   items-center space-x-8 text-gray-400">
                    <div className="flex  space-x-2 items-center">
                        <span> {reply.likes}</span>
                        <ThumbsUp className="w-5 h-5" />
                    </div>
                    <div className="flex  space-x-2 items-center"  >
                        <span>{reply.dislikes}</span>
                        <ThumbsDown className="w-5 h-5" />
                    </div>
                    <button>BALAS</button>

                </div>
            </div>
        </div >

    )
}

export default ReplyCArd
