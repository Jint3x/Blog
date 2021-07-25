import React, { useState } from "react"
import useSWR from 'swr'

import Header from "../components/client-side/Header"
import Footer from "../components/client-side/Footer"
import BlogPostPreview from "../components/client-side/PostPreview"

const fetcher = async function<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<JSON> {
    const res = await fetch(input, init)
    return res.json()
  }

interface PostPreview {
    thumbnail: string,
    title: string,
    description: string,
    date: string,
    tags: string[],
    url: string,
}


interface ListOfBlogs_I {
    blogPosts: PostPreview[]
}
 
function ListOfBlogs(props: ListOfBlogs_I) {
    return (
        <>
        <Header />
        <BlogPage blogs={props.blogPosts} />
        <Footer />
        </>
    )
}


interface BlogPage_I {
    blogs: PostPreview[]
}

function BlogPage(props: BlogPage_I) {
    const [posts, setPosts] = useState(props.blogs);
    const [page, setPage] = useState(1);

    const {data, isValidating, error} = useSWR(`/api/blog?page=${page}&amount=${6}`, fetcher, {initialData: props.blogs, revalidateOnFocus: false, revalidateOnMount: false})

    return (
        <section>
            <div className={"pt-24 pb-12 sm:pt-16"}>
                <FilterBlogs />

                <DisplayBlogs 
                 isLoading={false}
                 blogs={page === 1 ? data as PostPreview[] : []} 
                />

                <BlogPagination 
                 page={page} 
                 setPage={setPage}
                 amountOfPosts={posts.length}
                />
            </div>
        </section>
    )
}


function FilterBlogs() {
    return (
        <div>
            <h1 className={"text-center text-2xl"}>Search Blogs</h1>

            <input 
             type={"text"}
             className={"w-64 sm:w-80 md:w-96 lg:w-128 h-6 sm:h-8 border pl-2 pr-2 bg-main-green-trans border-2 border-solid border-main-green rounded ml-auto mr-auto block mt-4 outline-none"} 
            />
            <p className={"text-red-500 w-64 md:w-96 lg:w-128 ml-auto mr-auto text-center"}>Search feature not available yet</p>
        </div>
    )
}


interface DisplayBlogs_I {
    blogs: PostPreview[],
    isLoading: boolean,
}
// Take url props to fetch
function DisplayBlogs(props: DisplayBlogs_I) {

    return (
        <section>
            <div className={`flex sm:max-w-3xl flex-col flex-wrap justify-space-around ml-auto mr-auto xl:max-w-5xl sm:min-w-sm ${props.isLoading || props.blogs.length < 1 ? "sm:flex" : "sm:grid"} sm:grid-cols-2 sm:grid-rows-${Math.ceil(props.blogs.length / 2)} xl:grid-cols-3 xl:grid-rows-2`}> 
                {
                    props.isLoading ? 
                    <div className={"mt-32 mb-32 sm:mt-48 sm:mb-48 md:mb-48 lg:mb-64 lg:mt-64 animate-spinner ml-auto mr-auto ease-linear rounded-full border-8 border-gray-200 h-24 w-24"} />
                    :
                    props.blogs.length < 1 ?
                    <div>
                        <h2 className={"text-center mt-32 mb-32 text-xl sm:mt-64 sm:mb-64 xl:mt-80 xl:mb-80"}>No blogs available</h2>
                    </div>
                    :
                    (props.blogs.map(blog =>
                        <BlogPostPreview 
                         thumbnail={blog.thumbnail}
                         title={blog.title}
                         description={blog.description}
                         date={blog.date}
                         tags={blog.tags}
                         url={blog.url}
                         key={blog.title}
                        />
                    ))
                }
                
            </div>
        </section>
    )
}

interface BlogPagination_I {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    amountOfPosts: number
}

function BlogPagination(props: BlogPagination_I) {
    return (
        <div>
            <p className={"w-12 flex justify-around ml-auto mr-auto"}>
                <span 
                 className={"cursor-pointer"}
                 onClick={() => props.setPage(oldpage => oldpage - 1)}
                >
                    {props.page === 1 ? "" : props.page - 1}
                </span>

                <span className={"text-main-green"}>
                    {props.page}
                </span>

                <span 
                 className={"cursor-pointer"}
                 onClick={() => props.setPage(oldpage => oldpage + 1)}
                >
                    {props.amountOfPosts === 6 ? props.page + 1 : ""}
                </span>
            </p>
        </div>
    )
}



export async function getStaticProps() {
    // Fetch the latest 6 posts from here with a fetch function

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
        revalidate: 1800,
        props: { blogPosts: [latestPost, latestPost, latestPost, latestPost, latestPost, latestPost] }
    }
}

export {FilterBlogs, DisplayBlogs, BlogPagination}
export default ListOfBlogs