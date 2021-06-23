import React from "react"

type ImageType = "wide" | "tall";
interface PostImage_I {
    src: string, 
    alt: string,
    desc: string,
    imageType: ImageType
}

function PostImage(props: PostImage_I) {
    return (
        <div className={"pt-4 pb-4"}>
            <img 
             src={props.src}
             alt={props.alt}
             className={`block ml-auto mr-auto ${props.imageType === "wide" ? "w-full sm:w-128" : "w-4/6 sm:w-72 "}`}
            />

            <p className={`ml-auto mr-auto pt-1 text-sm text-color-image-comment ${props.imageType === "wide" ? "w-full sm:w-128" : "w-4/6 sm:w-72 "}`}>
                {props.desc}
            </p>
        </div>
    )
}


export default PostImage