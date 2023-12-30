import * as React from "react"

export const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => {
    },
    getTheme: () => {
    }
})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = React.useState("light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
        localStorage.setItem("theme", theme === "light" ? "dark" : "light")
    }

    const getTheme = () => {
        const theme = localStorage.getItem("theme")
        setTheme(theme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, getTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
