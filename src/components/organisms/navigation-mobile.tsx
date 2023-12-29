"use client"

import * as React from "react"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {Link} from "gatsby";

export function NavigationMobile() {
    return (
        <Drawer>
            <DrawerTrigger>
                <Menu className={"bg-secondary ml-2 mt-2"} />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerFooter>
                    <Link to={"/"} className={"text-right"}>
                        <Button className={"w-full h-12"}>Главная</Button>
                    </Link>
                    <Link to={"/schedule"} className={"text-right"}>
                        <Button className={"w-full h-12"}>Расписание</Button>
                    </Link>
                    <Link to={"/test"} className={"text-right"}>
                        <Button className={"w-full h-12"}>Test</Button>
                    </Link>
                    <DrawerClose>
                        <Button variant="outline" className={"w-full h-12"}>Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}