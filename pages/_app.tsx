import * as React from "react"
import NextApp from "next/app"
import "../node_modules/tachyons/css/tachyons.min.css"
import "../src/css/animate.css"
import "../src/css/general.css"

interface Props {
    pageProps: any
    component: any
}

class App extends NextApp<Props> {
    render() {
        // @ts-ignore
        const { pageProps, Component } = this.props

        return <Component {...pageProps} />
    }
}

export default App
