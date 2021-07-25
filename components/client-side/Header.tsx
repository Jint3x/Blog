import React, { useEffect, useState } from "react"

let topIsVisible: boolean;
let topSetIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

function Header() {
    let [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // I couldn't figure out how to run a scroll event listener that uses the state from above to add effects to the mobile 
        // header and then remove it (even with the return option in the useEffect). This is why global variables will be set and then
        // they will be accessed from the scroll function.
        topIsVisible = isVisible;
        topSetIsVisible = setIsVisible;

        window.addEventListener("scroll", scrollFunction)
        
        return function clean() {
            window.document.removeEventListener("scroll", scrollFunction)
        }
    }, [isVisible])

    return (
        <nav>
            <div className={`
             bg-black flex pt-1 pb-2 content-center flex-col fixed w-full transition-all transform duration-1000 z-50
             sm:flex-row sm:pt-1 sm:h-10 sm:left-1/2 sm:-translate-x-1/2 sm:rounded-b-3xl sm:w-128
             ${isVisible === true ? "" : "-translate-y-10 sm:-translate-y-0"}
            `}>
                <LogoText />
                <Navigation />
            </div>
        </nav>
    )
}


// Used to detect when the page scroll is below 75px, if so, some new styles will be applied to the header.
function scrollFunction() {
    let isVisible = topIsVisible;
    let setIsVisible = topSetIsVisible;

    if ((document.documentElement.scrollTop || document.body.scrollTop) > 75 && isVisible) {
        setIsVisible(false);
    } else if ((document.documentElement.scrollTop || document.body.scrollTop) < 75 && !isVisible) {
        setIsVisible(true)
    }
}


function LogoText() {
    return (
        <div className={`w-full text-center sm:w-40 pl-3 pb-3`}>
                <p className={"text-2xl"}>
                    <span className={"text-main-blue relative bottom-2"}>Jint3x's</span>
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
                     href={"https://jint3x.dev"}
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