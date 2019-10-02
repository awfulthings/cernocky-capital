import * as React from "react"

interface Props {
    children: React.ReactNode
}

export const SectionHeader: React.FC<Props> = props => (
    <h3
        className="f3 f1-ns normal ma0 mb4 measure-wide"
        style={{
            paddingTop: "12px",
        }}>
        {props.children}
    </h3>
)
