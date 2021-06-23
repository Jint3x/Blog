import PostImage from "../components/client-side/PostImage"
import React from "react"


function Homepage() {
    return (
        <div>
            <div
             className={"w-1/2 ml-auto mr-auto"}
            >
                <PostImage
                src={"https://ichef.bbci.co.uk/news/976/cpsprodpb/13F00/production/_95146618_bills.jpg"}
                alt={"A man holding toilet paper as binoculars"}
                desc={"A man holding toilet paper as binoculars"}
                imageType={"wide"}
                />
            </div>
            
        </div>
    )
}


export default Homepage