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

export function NavigationMobile() {
    const getDarkMode = () => {
        if (typeof window !== `undefined`) {
            const isDark = localStorage.getItem("isDark");
            return isDark
        }
        return "false"
    }
    const [isDark, setIsDark] = React.useState(getDarkMode())
    const toggleDarkMode = () => {
        if (typeof window !== `undefined`) {
            document.querySelector('html').classList.toggle("dark")
            if (isDark === "true") {
                localStorage.setItem("isDark", "false");
                setIsDark("false")
            } else {
                localStorage.setItem("isDark", "true");
                setIsDark("true")
            }
        }
    }
    React.useEffect(() => {
        if (isDark === 'true') {
            document.querySelector('html').classList.add("dark")
        } else {
            document.querySelector('html').classList.remove("dark")
        }
    }, [isDark])

    return (
        <Drawer>
            <DrawerTrigger aria-controls="radix-:R15:">
                <Menu className={"bg-secondary ml-2 mt-2"} />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerFooter>
                    <Button className={"w-full h-12"}
                            onClick={toggleDarkMode}>
                        {(isDark === "true") ?
                            <div className={"flex"}><Sun
                                className={"h-4"} /> Светлая тема</div> :
                            <div className={"flex"}><SunMoon
                                className={"h-4"} /> Тёмная тема</div>}
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
                                className={"w-full h-12"}>Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}