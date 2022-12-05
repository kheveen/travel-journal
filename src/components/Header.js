import React from "react"
import globe from "../images/globe.png"


export default function Header() {
    return (
        <nav className="header">
            <img src={globe} alt="logo" className="header-logo"/>
            <h1 className="project-name">My Travel Journal</h1>
        </nav>
    )
}