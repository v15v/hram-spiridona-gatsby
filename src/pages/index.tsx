import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import EmblaCarousel from "@/components/organisms/carousel/carousel.tsx"
import Layout from "@/components/templates/layout"
import About from "../content/about.mdx"
import Contacts from "../content/contacts.mdx"
import Schedule from "../components/organisms/schedule"
import {Separator} from "@/components/ui/separator";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={"mx-1"}>
                <EmblaCarousel />
            </div>

            <div className={"markdown"}>
                <div className={"p-5 mx-1 mb-10 flex justify-center"}>
                    <div>
                        <About />
                    </div>
                </div>

                <Separator />
                <div className={"md:p-5 md:mx-1 mb-10"}>
                    <h2>Расписание богослужений</h2>
                    <Schedule />
                </div>

                <Separator />
                <div className={"p-5 mx-1 mb-10 flex justify-center"}>
                    <div>
                        <Contacts />
                    </div>
                </div>

            </div>

        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hram Spirilona</title>
