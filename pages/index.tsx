import Header from "../components/client-side/Header"
import Footer from "../components/client-side/Footer"
import PostPreview from "../components/client-side/PostPreview"

import React, { Dispatch, SetStateAction, useState } from "react"
import { GetStaticProps, GetServerSidePropsContext } from 'next'



interface Homepage_I {
    latestPost: PostPreviewData
}

function Homepage(props: Homepage_I) {
    return (
        <div>
            <Header />
            <BlogIntroduction />
            <LatestPost recentPost={props.latestPost} />
            <Footer />
        </div>
    )
}


function BlogIntroduction() { // Commit later
    return (
        <section>
            <div className={"w-full bg-homepage-introduction pt-24 text-default-white bg-center"}>
                <h1 className={"text-center text-3xl"}>
                    <span className={"text-main-blue relative bottom-2 right-1"}>Jint3x's</span>
                    <span className={"text-main-green"}>Blogs</span>
                </h1>

                <h2 className={"text-center text-xl"}>
                    Satisfy your curiosity
                </h2>

                <p className={"w-4/5 text-center pt-4 pb-24 ml-auto mr-auto sm:w-128 sm:text-lg lg:w-192"}>
                    As a developer, I’ve always asked myself ‘how?’. In a world, where things just keep getting more complex and difficult to learn, I want to create a place,
                    a community where even the most complex things about technology and programming are explored in depth and fundametally understood. The first step towards
                    achieving this goal, is this website. Here, I will try to go very in depth and explain many and different subjects about computers and programming.
                </p>
            </div>
        </section>
    )
}

interface PostPreviewData {
    thumbnail: string,
    title: string,
    description: string,
    date: string,
    tags: string[],
    url: string,
}

interface LatestPost_I {
    recentPost: PostPreviewData
}

function LatestPost(props: LatestPost_I) {
    const [postData, setPostData]: [PostPreviewData, Dispatch<SetStateAction<PostPreviewData>>]  = useState(props.recentPost)

    return (
        <div className={"max-w-lg ml-auto mr-auto"}>
            <h2 className={"text-center mt-12 text-2xl font-normal"}>Recently Posted Blogs</h2>

            <div className={"flex align-center justify-center flex-col sm:flex-row sm:items-center"}>
                <ClickButton extraClasses={"relative top-8 sm:static"} direction={"up"} />

                <div className={"relative"}>
                    <PostPreview 
                    thumbnail={postData.thumbnail}
                    title={postData.title}
                    description={postData.description}
                    date={postData.date}
                    tags={postData.tags}
                    url={postData.url}
                    />

                    <div className={"absolute w-72 h-80 bg-main-green transform translate-x-4 -rotate-6 top-0 -z-10 mt-12 mb-12 inset-x-1/2 -translate-x-1/2"} />
                 </div>

                <ClickButton extraClasses={"relative bottom-10 sm:static"} direction={"down"} />
            </div>
        </div>
    )
}

type ClickButtonDir = "up" | "down";

interface ClickButton_I {
    extraClasses?: string,
    direction: ClickButtonDir
}


// Need to realign the arrows when the screen becomes big enough
function ClickButton(props: ClickButton_I) {
    return (
        <div className={`w-12 h-12 rounded-full bg-black ml-auto mr-auto mt-2 cursor-pointer flex items-center ${props.extraClasses} transform duration-300 ${props.direction === "up" ? "sm:hover:-translate-x-2" : "sm:hover:translate-x-2"}`}>
            <img
             src={"/images/homepage/arrow.png"}
             alt={"Switch Blog Icon"}
             className={`w-8 block ml-auto mr-auto transform ${props.direction === "up" ? "-rotate-90 sm:rotate-180" : "rotate-90 sm:rotate-0"}`} 
            />
        </div>
    )
}


/**
 * TODO: 
 * Implement a blog fetch function which should be used when one of the arrows from above is
 * clicked (which will cause a new blog to be shown).
*/


export { BlogIntroduction, LatestPost }
export default Homepage


export async function getStaticProps(context: GetServerSidePropsContext) {
    // Fetch the latest post from here 

    let latestPost = {
        thumbnail: "/images/homepage/blogs-introduction.jpg",
        title: "A title",
        description: 
        `As a developer, I’ve always asked myself ‘how?’. In a world, where things just keep getting more complex and difficult to learn, I want to create a place,
        a community where even the most complex things about technology and programming are explored in depth and fundametally understood. The first step towards
        achieving this goal, is this website. Here, I will try to go very in depth and explain many and different subjects about computers and programming.`, 
        date: "2nd of Feb, 2021",
        tags: ["Deep Dive", "SDF", "Tdsogy", "Technology", "Technology"],
        url: "/blog/how-to-test"
    }

    return {
        revalidate: 900,
        props: { latestPost }
    }
}