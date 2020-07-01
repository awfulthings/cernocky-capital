import * as React from "react"
import Div100vh from "react-div-100vh"
import { Nav } from "./Nav"
import Link from "next/link"

interface Props {
    children: React.ReactNode
}

export const Layout: React.FC = (props: Props) => (
    <Div100vh
        style={{ minHeight: "100rvh" }}
        className="flex flex-column main-bg-image bg-white black min-vh-100">
        <div className="flex flex-auto flex-column">
            <div className="flex-ns db justify-between bg-white pa3 pv4-ns ph5-ns ph4-m">
                <h1 className="f4 f5-m normal tracked-tight flex-auto mt2 mb3 mb3-ns mt0-ns mv1-ns ma0-ns">
                    <Link href="/">
                        <a className="black no-underline">Cernocky</a>
                    </Link>
                </h1>
                <Nav />
            </div>
            {/* Main Content */}
            <div className="flex-auto flex flex-column">{props.children}</div>
        </div>
        {/* Footer */}
        <footer className="bg-black white tl tr-ns w-100 pv2 ph3 pv3-ns ph5-ns f7 ph4-m">
            <p className="pa0 ma0">
                © 2019 Cernocky &nbsp;&nbsp;|&nbsp;&nbsp;All Rights Reserved
            </p>
        </footer>
    </Div100vh>
)
