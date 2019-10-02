import React from "react"
import Head from "next/head"
import { Layout } from "../src/components/Layout"
import { WhiteContainer } from "../src/components/WhiteContainer"
import { SectionHeader } from "../src/components/SectionHeader"
import { SectionHeaderSquare } from "../src/components/SectionHeaderSquare"
import { SectionContainer } from "../src/components/SectionContent"

const InvestmentPhilosophy = () => (
    <div>
        <Head>
            <title>Investment Philosophy - Cernocky Capital</title>
        </Head>
        <Layout>
            <WhiteContainer>
                <SectionHeaderSquare />
                <SectionContainer>
                    <SectionHeader>Investment Philosophy</SectionHeader>
                    <p className="lh-copy measure-wide">
                        Our primary focus is the long-term preservation of capital while seeking to
                        compound capital at above-average returns over a full market cycle. We
                        invest globally across the market cap spectrum – seeking opportunities to
                        purchase high-quality stories with growth traction.
                    </p>
                    <h5 className="f5 b mt4 mb2 measure-wide">
                        We are looking for investments that fulfill the following criteria:
                    </h5>
                    <ul className="lh-copy measure-wide">
                        <li>Have long term revenue growth potential</li>
                        <li>
                            Have strongly committed management that genuinely cares about its
                            customers, employees and is dedicated to developing the business
                        </li>
                        <li>
                            Have a business model which is hardly imitable by competitors
                            (competitive advantage) and is able to further deepen this advantage
                        </li>
                    </ul>
                    <h5 className="f5 b mt4 mb2 measure-wide">We abide three main principles:</h5>
                    <ul className="lh-copy measure-wide">
                        <li>Stay within our circle of competence</li>
                        <li>Keep things simple. Rationality and common sense is key</li>
                        <li>Concentrate capital in only the best ideas</li>
                    </ul>
                    <p className="mt4 lh-copy measure-wide">
                        Additionally, we follow a research-intensive, concentrated strategy which
                        generally consists of 7-15 core positions. The strategy is long-biased,
                        however we may occasionally short individual companies with highly
                        asymmetric risk-reward characteristics. Additionally, we’ll hold large cash
                        positions and have the ability to use derivatives to hedge broader market
                        tail-risk during periods of market excess.
                    </p>
                </SectionContainer>
            </WhiteContainer>
        </Layout>
    </div>
)

export default InvestmentPhilosophy
