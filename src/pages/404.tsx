import * as React from "react"
import {HeadFC, Link, PageProps} from "gatsby"
import Layout from "@/components/templates/layout";

const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div>
                <div
                    className={"p-5 mx-px mb-10 flex justify-center items-center"}>
                    <div>
                        <h1>Page not found</h1>
                        <p>
                            Sorry 😔, we couldn’t find what you were looking
                            for.
                            <br />
                            {process.env.NODE_ENV === "development" ? (
                                <>
                                    <br />
                                    Try creating a page in <code
                                    style={codeStyles}>src/pages/</code>.
                                    <br />
                                </>
                            ) : null}
                            <br />
                            <Link to="/">Go home</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
