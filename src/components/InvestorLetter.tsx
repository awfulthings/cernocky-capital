import * as React from "react"
import letter from "../assets/letter.png"

interface Props {
    // todo:
    description?: string
    publishedAt?: string
}

export const InvestorLetter: React.FC<Props> = props => (
    <div className="fl w-50 w-25-ns pr4">
        <div className="ba b--black-20 mb3 pointer shadow-4 dim">
            <img src={letter} alt="2018 Q2" />
        </div>
        <h5 className="ma0 pa0 normal f5 mb2 b">Best Ideas 2018</h5>
        <h6 className="ma0 pa0 normal f6 i black-70">Published: 09 / 2019</h6>
    </div>
)
