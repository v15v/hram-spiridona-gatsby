import React from "react"
import {Navigation} from "@/components/organisms/navigation"
import Footer from "@/components/organisms/footer"
import "./layout.scss"

const Layout = ({children}) => {
    return (
        <div className={"site-content mx-auto max-w-screen-xl font-serif"}>
            <div
                className={"h-10 fixed bg-white max-w-screen-xl w-full z-50 px-0 mx-0"}>
                <Navigation />
            </div>

            <main className={"pt-10"}>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout