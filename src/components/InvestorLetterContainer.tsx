import * as React from "react"

interface Props {
    children: React.ReactNode
}

export const InvestorLetterContainer: React.FC<Props> = props => (
    <div className="mt4 pb4 bb b--black-20 bl-0 br-0 bt-0 cf">{props.children}</div>
)
