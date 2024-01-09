"use client"

import * as React from "react"
import {Link} from "gatsby"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {Church, Sun, SunMoon} from "lucide-react"
import {ThemeContext} from "../../context/theme"

export function NavigationDesktop() {
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
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        id={"home"}
                        aria-controls={"home"}
                    >Основное меню</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        to={"/"}
                                    >
                                        <Church className="h-6 w-6" />
                                        <div
                                            className="mb-2 mt-4 text-lg font-medium">
                                            Главная
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Русская Православная Церковь,
                                            Московская митрополия,
                                            Сергиево-Посадская епархия,
                                            Яхромское благочиние,
                                            Спиридоньевский храм
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link to={"/schedule"}
                                          className={"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
                                    >
                                        <div
                                            className="text-sm font-medium leading-none">Расписание
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Подробное расписание богослужений
                                            на ближайшие дни
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link to={"/help-us"}
                                          className={"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
                                    >
                                        <div
                                            className="text-sm font-medium leading-none">Помощь храму
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Храм нуждается в вашей помощи
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link to={"/404"}
                                          className={"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
                                    >
                                        <div
                                            className="text-sm font-medium leading-none">404
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Проверка страницы 404
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                                        onClick={toggleTheme}
                                        className={navigationMenuTriggerStyle()}>
                        {theme === "dark" ? (
                                <button><Sun className={"h-8"} /></button>) :
                            (<button><SunMoon className={"h-8"} /></button>)}
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}