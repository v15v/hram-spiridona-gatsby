import React from "react"
import {Navigation} from "@/components/organisms/navigation"
import Footer from "@/components/organisms/footer"
import "./layout.scss"

const Layout = ({children}) => {
    return (
        <div className={"mx-auto max-w-screen-xl"}>
            <div
                className={"h-10 fixed bg-white max-w-screen-xl w-full z-50 px-0 mx-0"}>
                <Navigation />
            </div>

            <div className={"pt-10"}>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout