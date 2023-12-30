import "./src/styles/global.css"
import * as React from "react"
import WrapRootElement from "./src/wrap-root-element"

export const wrapRootElement = ({ element }) => (
    <WrapRootElement>{element}</WrapRootElement>
)
