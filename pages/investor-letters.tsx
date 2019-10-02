import React from "react"
import Head from "next/head"
import { Layout } from "../src/components/Layout"
import { InvestorLetter } from "../src/components/InvestorLetter"
import { InvestorLetterContainer } from "../src/components/InvestorLetterContainer"
import { WhiteContainer } from "../src/components/WhiteContainer"
import { SectionHeader } from "../src/components/SectionHeader"
import { SectionContainer } from "../src/components/SectionContent"

const InvestorLetters = () => {
    return (
        <div>
            <Head>
                <title>Investor Letters - Cernocky Capital</title>
            </Head>
            <Layout>
                <WhiteContainer>
                    <div className="b--black-10 b--solid bw1 absolute smaller-square animated fadeIn"></div>
                    <SectionContainer>
                        <SectionHeader>Investor Letters</SectionHeader>
                        <p className="lh-copy measure-wide">
                            <b>Our primary focus</b> is the long-term preservation of capital while
                            seeking to compound capital at above-average returns over a full market
                            cycle. We invest globally across the market cap spectrum – seeking
                            opportunities to purchase high-quality stories with growth traction.
                        </p>
                        <div className="dn db-ns">
                            <InvestorLetterContainer>
                                <InvestorLetter />
                                <InvestorLetter />
                                <InvestorLetter />
                                <InvestorLetter />
                            </InvestorLetterContainer>
                            <InvestorLetterContainer>
                                <InvestorLetter />
                                <InvestorLetter />
                                <InvestorLetter />
                                <InvestorLetter />
                            </InvestorLetterContainer>
                        </div>
                        <div className="db dn-ns">
                            <InvestorLetterContainer>
                                <InvestorLetter />
                                <InvestorLetter />
                            </InvestorLetterContainer>
                            <InvestorLetterContainer>
                                <InvestorLetter />
                                <InvestorLetter />
                            </InvestorLetterContainer>
                        </div>
                    </SectionContainer>
                </WhiteContainer>
            </Layout>
        </div>
    )
}

export default InvestorLetters
