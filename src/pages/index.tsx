import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import EmblaCarousel from "@/components/organisms/carousel/carousel.tsx";
import Layout from "@/components/templates/layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={"mx-1"}>
                <EmblaCarousel />
            </div>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hram Spirilona</title>
