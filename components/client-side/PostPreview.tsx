import React from "react"


interface PostPreview_I {
    thumbnail: string,
    title: string,
    description: string,
    date: string, 
    tags: string[],
    url: string,

    // If loading is set to true, all other fields won't be used
    loading?: boolean,
}

function PostPreview(props: PostPreview_I) {
    return (
        <div className={"w-72 bg-white ml-auto mr-auto h-80 rounded shadow-lg shadow shadow-md shadow-personal mt-12 mb-12 overflow-hidden"}>

            {
                props.loading ? 
                (
                    <div className={"h-20per bg-black"} />
                )
                :
                (
                    <div 
                     style={{backgroundImage: `url(${props.thumbnail})`}} 
                     className={"h-20per bg-center overflow-hidden cursor-pointer"} 
                     onClick={() => location.assign(props.url)}
                    />
                )
            }
            

            <div className={"h-65per color-default-dark relative"}>
                <h3 className={"text-center pt-1 pb-2 text-2xl overflow-hidden"}>
                    {
                        props.loading ? "Loading..." : props.title
                    }
                </h3>

                <div className={"relative h-3/6 pl-2 pr-2 mt-2"}>
                    <p className={"overflow-hidden h-full"}>
                        {props.loading ? "" : props.description}
                    </p>
                    <div className={"absolute bottom-0 h-12 w-full bg-gradient-to-t from-white to-transparent"} />
                </div>
                

                <p className={"absolute bottom-1 text-sm left-1 text-post-date"}>
                    {props.loading ? "" : props.date}
                </p>
            </div>

            <div 
             className={"h-15per bg-main-blue-lighter flex-nowrap flex items-center overflow-hidden relative cursor-pointer"}
             onClick={() => location.assign(props.url)}
            >
                <div className={"absolute h-full w-1/12 right-0 bg-gradient-to-l from-main-blue-lighter to-transparent"} />
                {
                    props.loading ? "" : props.tags.map(tag => <RenderTag name={tag} key={tag} />)
                }
            </div>
        </div>
    )
}


interface RenderTag_I {
    name: string,
}

function RenderTag(props: RenderTag_I) {
    return (
        <p className={"bg-main-green-trans ml-2 mr-2 text-sm rounded-md p-1 no-break whitespace-nowrap"}>
            {props.name}
        </p>
    )
}




export default PostPreview