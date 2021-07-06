import Header from "../components/client-side/Header"
import Footer from "../components/client-side/Footer"
import React from "react"


function Homepage() {
    return (
        <div>
            <Header />
            
            <BlogIntroduction />

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

export { BlogIntroduction }
export default Homepage