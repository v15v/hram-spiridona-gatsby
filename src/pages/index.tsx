import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import EmblaCarousel from "@/components/organisms/carousel/carousel.tsx";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className={"container max-w-screen-xl"}>
            <EmblaCarousel />
        </div>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hram Spirilona</title>
