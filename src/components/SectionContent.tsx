import * as React from "react"
import { WhiteContainer } from "./WhiteContainer"

interface Props {
    children: React.ReactNode
}

export const SectionContainer: React.FC<Props> = props => (
    <div className="pl2 pl3-ns pl4-ns pt2 pt2-ns ml2 mt2-ns w-50-l w-90-m w-100-ns animated fadeIn">
        {props.children}
    </div>
)
