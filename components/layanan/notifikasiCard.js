import React from 'react'

const NotifikasiCard = ({ notif }) => {
    return (
        <div className="flex flex-wrap justify-start md:space-x-3">
            <div className="flex flex-col  space-y-2 md:w-1/2  ">
                <h3 className="text-lg ">{notif.title}</h3>
                <p className="text-sm ">{notif.text}</p>

            </div>
            <span className="text-gray-400">{notif.date}</span>
        </div>
    )
}

export default NotifikasiCard
