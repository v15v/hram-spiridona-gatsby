"use client"

import * as React from "react"
import {Link} from "gatsby"

import {cn} from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Church, Sun, SunMoon} from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function NavigationDesktop() {
    const getDarkMode = () => {
        const isDark = localStorage.getItem("isDark");
        return isDark
    }
    const [isDark, setIsDark] = React.useState(getDarkMode())
    const toggleDarkMode = () => {
        document.querySelector('html').classList.toggle("dark")
        if (isDark === "true") {
            localStorage.setItem("isDark", "false");
            setIsDark("false")
        } else {
            localStorage.setItem("isDark", "true");
            setIsDark("true")
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
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={"bg-background"}>
                        Основное меню
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        to={"/"}>
                                        <Church />
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
                            <Link to={"/temp"}>
                                <ListItem title="Introduction">
                                    Re-usable components built using Radix UI
                                    and Tailwind CSS.
                                </ListItem>
                            </Link>
                            <ListItem href="/schedule"
                                      title="Расписание">
                                Подробный список ближайших богослужений
                            </ListItem>
                            <ListItem href="/docs/primitives/typography"
                                      title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={"bg-background"}>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        onClick={toggleDarkMode}
                    >
                        {(isDark === "true") ? <Sun className={"h-4"} /> :
                            <SunMoon className={"h-4"} />}
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">>(({
                                              className,
                                              title,
                                              children,
                                              ...props
                                          }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div
                        className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
