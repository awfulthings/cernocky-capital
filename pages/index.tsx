import React from "react"
import Head from "next/head"
import { Layout } from "../src/components/Layout"

const Home = () => (
    <div>
        <Head>
            <title>Home - Cernocky Capital</title>
        </Head>
        <Layout>
            <div className="ph3 pt4 pt5-ns ph5-ns ph4-m">
                <div className="b--black-05 b--black-10-ns b--solid bw1 absolute animated fadeIn square-element"></div>
                <div className="ml3 mt4 pt2 pt0-ns mt0-ns ml5-ns ml4-m pl0 pl2-m pl0-l">
                    <h2 className="f3 normal ma0 pt4-ns f1-ns animated fadeInUp">
                        Research & Asset Management
                    </h2>
                    <h3 className="dn db-ns f5 tracked black-90 normal ma0 mt3 pl1 animated fadeInUp">
                        Long Term | Concentrated&nbsp;|&nbsp;Growth-focused
                    </h3>
                    <h3 className="dn-ns f6 tracked black-60 normal ma0 mt2 animated fadeInUp">
                        Long Term | Concentrated&nbsp;|&nbsp;Growth-focused
                    </h3>
                    {/*<h3 class="dn-ns f6 lh-copy tracked black-90 normal ma0 mt2 pl1 animated fadeInUp">&square;Long Term<br />Concentrated<br />Growth-focused</h3>*/}
                </div>
            </div>
        </Layout>
    </div>
)

export default Home
