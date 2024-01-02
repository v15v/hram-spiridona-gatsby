import React from "react"
import {NavigationDesktop} from "@/components/organisms/navigation-desktop"
import Footer from "@/components/organisms/footer"
import "./layout.scss"
import {NavigationMobile} from "@/components/organisms/navigation-mobile";
import {Separator} from "@/components/ui/separator";

const Layout = ({children}) => {
    return (
        <div className={"site-content mx-auto max-w-screen-xl font-serif"}>
            <div
                className={"h-11 hidden sm:block fixed bg-background max-w-screen-xl w-full z-50 px-0 mx-0"}>
                <NavigationDesktop />
            </div>
            <div
                className={"sm:hidden fixed z-50 right-2 top-1/2 flex"}>
                <NavigationMobile />
            </div>

            <main className={"md:pt-11"}>
                {children}
            </main>

            <Separator />
            <Footer />
        </div>
    )
}

export default Layout