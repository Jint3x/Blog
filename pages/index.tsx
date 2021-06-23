import Announcement from "../components/client-side/Announcement"
import React from "react"


function Homepage() {
    return (
        <div>
            <Announcement 
             title={"Warning!"}
             desc={"It is not safe to do this without the proper knowledge, it could lead to bad things."}
             textColor={"text-black"}
             bgColor={"bg-red-200"}
             headerColor={"text-red-500"}
             borderColor={"border-red-500"}
            />
        </div>
    )
}


export default Homepage