import React from "react"
import {NavigationDesktop} from "@/components/organisms/navigation-desktop"
import Footer from "@/components/organisms/footer"
import "./layout.scss"
import {NavigationMobile} from "@/components/organisms/navigation-mobile";

const Layout = ({children}) => {
    return (
        <div className={"site-content mx-auto max-w-screen-xl font-serif"}>
            <div
                className={"h-10 hidden sm:block fixed bg-white max-w-screen-xl w-full z-50 px-0 mx-0"}>
                <NavigationDesktop />
            </div>
            <div
                className={"sm:hidden fixed z-50 right-2 top-1/2 flex"}>
                <NavigationMobile />
            </div>

            <main className={"md:pt-10"}>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout