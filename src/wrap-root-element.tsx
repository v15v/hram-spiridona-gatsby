import * as React from "react"
import { ThemeProvider } from "./context/theme"

const WrapRootElement = ({ children }) => (
    <ThemeProvider>{children}</ThemeProvider>
)

export default WrapRootElement