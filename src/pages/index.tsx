import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import EmblaCarousel from "@/components/organisms/carousel/carousel.tsx"
import Layout from "@/components/templates/layout"
import About from "../content/about.mdx"
import Contacts from "../content/contacts.mdx"
// import Schedule from "../content/schedule.mdx"
import {Separator} from "@/components/ui/separator";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={"mx-1"}>
                <EmblaCarousel />
            </div>

            <div className={"markdown"}>
                <div className={"p-5 mx-1"}>
                    <About />
                </div>

                <Separator />
                {/*<div className={"p-5 mx-1"}>*/}
                {/*    <Schedule />*/}
                {/*</div>*/}

                <Separator />
                <div className={"p-5 mx-1"}>
                    <Contacts />
                </div>

            </div>

        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hram Spirilona</title>
