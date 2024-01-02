"use client"

import * as React from "react"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {Button} from "@/components/ui/button";
import {Menu, Sun, SunMoon} from "lucide-react";
import {Link} from "gatsby";
import {ThemeContext} from "../../context/theme"

export function NavigationMobile() {
    const {theme, toggleTheme, getTheme} = React.useContext(ThemeContext)
    React.useEffect(() => {
        getTheme()
    }, [])
    React.useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add("dark")
        } else {
            document.querySelector('html').classList.remove("dark")
        }
    }, [theme])

    return (
        <Drawer>
            <DrawerTrigger aria-controls="radix-:R15:">
                <Menu className={"bg-secondary ml-2 mt-2"} />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerFooter>
                    <Button className={"w-full h-12"}
                            onClick={toggleTheme}>
                        {theme === "dark" ? <Sun /> : <SunMoon />}
                    </Button>
                    <Link to={"/"} className={"text-right"}>
                        <Button className={"w-full h-12"}>Главная</Button>
                    </Link>
                    <Link to={"/schedule"} className={"text-right"}>
                        <Button className={"w-full h-12"}>Расписание</Button>
                    </Link>
                    <Link to={"/test"} className={"text-right"}>
                        <Button className={"w-full h-12"}>Test</Button>
                    </Link>
                    <DrawerClose asChild>
                        <Button variant="outline"
                                className={"w-full h-12"}>Закрыть</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}