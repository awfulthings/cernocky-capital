import * as React from "react"
import letter from "../assets/letter.png"

interface Props {
    children: React.ReactNode
}

export const WhiteContainer: React.FC<Props> = props => (
    <div className="ph3 pt3 pt2-ns pb4-m pb6-l pb2 ph4-m ph5-l flex-auto bg-white-90">
        {props.children}
    </div>
)
