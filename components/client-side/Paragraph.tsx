import React from "react"

interface ParagraphMainSection_I {
    thumbnail: string,
    thumbnailAlt: string,
    title: string, 
    text: string
}

function ParagraphMainSection(props: ParagraphMainSection_I) {
    return (
        <section>
        <div className={"pt-6 pb-4 w-full"}>
            <img 
             src={props.thumbnail}
             alt={props.thumbnailAlt}
             className={"pt-2 pb-2"}
            />

            <h1 className={"w-full color-default-dark pt-2 pb-2 text-2xl md:text-3xl font-medium text-center"}>
                {props.title}
            </h1>

            <ParagraphTextOnly text={props.text} />
        </div>
        </section>
    )
}


interface ParagraphSection_I {
    title: string,
    text: string,
}

function ParagraphSection(props: ParagraphSection_I) {
    return (
        <section>
        <div className={"pt-6 pb-4 w-full"}>
            <h2 className={"w-full pb-2 color-default-dark text-xl md:text-2xl font-medium"}>
                {props.title}
            </h2>

            <ParagraphTextOnly text={props.text} />
        </div>
        </section>
    )
}


interface ParagraphSubSection_I {
    title: string,
    text: string, 
}

function ParagraphSubSection(props: ParagraphSubSection_I) {
    return (
        <div className={"pt-4 pb-2 w-full"}>
            <h3 className={"w-full color-default-dark text-lg md:text-xl font-medium"}>
                {props.title}
            </h3>

            <ParagraphTextOnly text={props.text} />
        </div>
    )
}


interface ParagraphTextOnly_I {
    text: string,
}


function ParagraphTextOnly(props: ParagraphTextOnly_I) {
    return (
        <p className={"w-full pt-1 pb-2 color-default-dark text-base md:text-lg"}>
            {props.text}
        </p>
    )
}


export { ParagraphMainSection, ParagraphSection, ParagraphSubSection, ParagraphTextOnly }