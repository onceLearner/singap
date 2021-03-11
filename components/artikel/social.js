import React from 'react'
import {

    FacebookShareButton,


    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,


} from "react-share";



const ShareSocial = ({ ArticleUrl }) => {
    return (
        <div className="flex flex-wrap items-center space-x-4">
            <p className="text-lg font-medium">Bagin ke: </p>
            <FacebookShareButton size={25} round={true} color="black" url={ArticleUrl} >
                <FacebookIcon round size={40} />
            </FacebookShareButton>
            <WhatsappShareButton size={25} round={true} color="black" url={ArticleUrl} >
                <WhatsappIcon round size={40} />
            </WhatsappShareButton>
            <TwitterShareButton size={25} round={true} color="black" url={ArticleUrl} >
                <TwitterIcon round size={40} />
            </TwitterShareButton>




        </div>
    )
}

export default ShareSocial
