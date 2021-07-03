import React, { useEffect, useState } from "react"


function Header() {
    let [isVisible, setIsVisible]: [any, any] = useState("inital");

    useEffect(() => {
        window.addEventListener("scroll", () => scrollFunction())

        // Used to detect when the page scroll is below 50px, if so, some new styles will be applied to the header.
        function scrollFunction() {
            if ((document.documentElement.scrollTop || document.body.scrollTop) > 75 && isVisible) {
                setIsVisible(false);
            } else if ((document.documentElement.scrollTop || document.body.scrollTop) < 75 && !isVisible) {
                setIsVisible(true)
            }
        }

        return (
            window.removeEventListener("scroll", scrollFunction)
        )
    }, [])

    return (
        <nav>
            <div className={`
            bg-black flex pt-1 pb-2 content-center flex-col fixed w-full transition-all transform duration-1000 z-50
            ${isVisible !== false ? "" : "-translate-y-10 sm:-translate-y-0"} sm:flex-row sm:pt-1 sm:h-10
            ${isVisible === "initial" ? "" : isVisible === true ? "sm:animate-headerResizeOpposite" : "sm:animate-headerResize"}
            `}>
                <LogoText />
                <Navigation />
            </div>
        </nav>
    )
}

function LogoText() {
    return (
        <div className={`w-full text-center sm:w-40 pl-3 pb-3`}>
                <p className={"text-2xl"}>
                    <span className={"text-main-blue relative bottom-2"}>Jint3x</span>
                    <span className={"text-main-green relative left-1"}>Blogs</span>
                </p>
        </div>
    )
}


function Navigation() {
    return (
        <div className={"w-full self-center sm:w-72 sm:pt-1 sm:ml-auto sm:mr-6"}>
                <ul className={"flex justify-around w-full"}>
                    <NavigationLink 
                     href={"/"}
                     text={"Home"}
                    />

                    <NavigationLink 
                     href={"/blogs"}
                     text={"Blogs"}
                    />

                    <NavigationLink 
                     href={"https://devjint3x.com"}
                     text={"About me"}
                    />
                </ul>
        </div>
    )
}

interface NavigationLink_I {
    text: string,
    href: string,
}

function NavigationLink(props: NavigationLink_I) {
    let [url, setURL] = useState("");

    useEffect(() => {
        setURL(window?.location?.pathname || "")
    })

    let normalNavigation = "text-main-blue"
    let selectedNavigation = "text-main-green bg-main-blue"

    return (
        <li className={`border-main-green border rounded w-20 text-center ${url === props.href ? selectedNavigation : normalNavigation} hover:bg-main-blue-lighter transition-all cursor-pointer`}>
            <a
             href={props.href}
             className={"w-20"}
            >
                {props.text}
            </a>
        </li>
    )
}



export default Header