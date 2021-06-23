import React from "react"


interface Announcement_I {
    title: String,
    desc: String,
    bgColor: String,
    textColor: String,
    headerColor: String,
    borderColor: String,
}

function Announcement(props: Announcement_I) {
    return (
        <div className={`${props.borderColor} ${props.bgColor} p-2 border-solid border-l-4`}>
            <h3 className={`${props.headerColor} text-lg md:text-xl`}>
                {props.title}
            </h3>
            <p className={`${props.textColor} text-base pt-2 pb-2`}>
                {props.desc}
            </p>
        </div>
    )
}


export default Announcement