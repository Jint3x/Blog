import React from "react"


function Footer() {
    return (
        <footer className={"w-full bg-black"}>
            <div className={"pt-4 pb-4 flex w-56 justify-between mr-auto ml-auto sm:w-72"}>
                <div>
                    <h3 className={"text-main-green text-base"}>About me</h3>

                    <FooterLink 
                     href={"https://devjint3x.com"}
                     text={"My portfolio"}
                    />

                    <FooterLink 
                     href={"https://www.linkedin.com/in/alexandar-dimitrov-546782216/"}
                     text={"Linkedin"}
                    />  
                </div>
                <div>
                    <h3 className={"text-main-green text-base"}>Find me</h3>

                    <FooterLink 
                     href={"https://github.com/Jint3x"}
                     text={"Github"}
                    />

                    <FooterLink 
                     href={"https://twitter.com/Jint3x"}
                     text={"Twitter"}
                    />
                </div>
            </div>
        </footer>
    )
}


interface FooterLink_I {
    href: string,
    text: string,
}

function FooterLink(props: FooterLink_I) {
    return (
        <a 
         href={props.href}
         className={"text-main-blue text-sm no-underline pt-1 pb-1 block"}
        >
            {props.text}
        </a>
    )
}


export default Footer