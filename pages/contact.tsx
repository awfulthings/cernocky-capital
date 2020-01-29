import React from "react"
import Head from "next/head"
import { Layout } from "../src/components/Layout"
import { WhiteContainer } from "../src/components/WhiteContainer"
import { SectionHeader } from "../src/components/SectionHeader"
import { SectionHeaderSquare } from "../src/components/SectionHeaderSquare"
import { SectionContainer } from "../src/components/SectionContent"

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact - Cernocky Capital</title>
            </Head>
            <Layout>
                <WhiteContainer>
                    <SectionHeaderSquare />
                    <SectionContainer>
                        <SectionHeader>Contact</SectionHeader>
                        <div className="">
                            <ul className="bl bw2 pl3 pl4-m mt0 list">
                                <li className="mb2">
                                    <b>Michal Černocký, Prague</b>
                                </li>
                                <li className="mb2">
                                    Email:{" "}
                                    <a
                                        href="mailto:cernockymichal@gmail.com"
                                        className="no-underline black dib bb b--dotted bt-0 bl-0 br-0 dim">
                                        cernockymichal@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </SectionContainer>
                </WhiteContainer>
            </Layout>
        </div>
    )
}

export default Contact
