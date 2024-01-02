import * as React from "react"
import type {PageProps} from "gatsby"
import EmblaCarousel from "@/components/organisms/carousel/carousel.tsx"
import Layout from "@/components/templates/layout"
import About from "../content/about.mdx"
import Commemoration from "../content/commemoration.mdx"
import Contacts from "../content/contacts.mdx"
import Schedule from "../components/organisms/schedule"
import {Separator} from "@/components/ui/separator"
import Seo from "@/components/seo"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={"mx-px"}>
                <EmblaCarousel />
            </div>

            <div className={"markdown"}>
                <div className={"p-5 mx-px mb-10 flex justify-center"}>
                    <div>
                        <About />
                    </div>
                </div>

                <Separator />
                <div className={"md:p-5 md:mx-px mb-10"}>
                    <h2>Расписание богослужений</h2>
                    <Schedule />
                </div>

                <Separator />
                <div className={"p-5 mx-px mb-10 flex justify-center"}>
                    <div>
                        <Commemoration />
                    </div>
                </div>

                <Separator />
                <div className={"p-5 mx-px mb-10 flex justify-center"}>
                    <div>
                        <Contacts />
                    </div>
                </div>

            </div>

        </Layout>
    )
}

export default IndexPage

export const Head = () => <Seo title="Главная" />