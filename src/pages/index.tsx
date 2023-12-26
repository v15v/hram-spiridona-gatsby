import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import EmblaCarousel from "@/components/organisms/carousel/carousel.tsx";
import {
    NavigationMenuDemo
} from "@/components/organisms/navigation/navigation";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className={"mx-auto max-w-screen-xl"}>
            <div
                className={"h-10 fixed bg-white max-w-screen-xl w-full z-50 px-0 mx-0"}>
                <NavigationMenuDemo />
            </div>
            <div className={"pt-10 mx-1"}>
                <EmblaCarousel />
            </div>
            <div className={"h-screen"}></div>
        </div>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hram Spirilona</title>
