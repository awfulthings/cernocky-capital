import React from "react"
import Link from "next/link"
import classnames from "classnames"
import { useRouter } from "next/router"

interface NavLink {
    href: string
    label: string
}

const links: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/investment-philosophy", label: "Investment Philosophy" },
    // { href: "/investor-letters", label: "Investor Leters" },
    { href: "/contact", label: "Contact" },
]

export const Nav: React.FC = () => {
    const router = useRouter()
    return (
        <nav className="flex f6 f5-l">
            {links.map(({ href, label }, index) => (
                <Link href={href} key={href}>
                    <a
                        className={classnames([
                            "db black no-underline pb2 pb0-ns navbar-link",
                            href === router.asPath && "active",
                            index === links.length - 1 ? "mr0" : "mr3 mr4-ns",
                        ])}>
                        {label}
                    </a>
                </Link>
            ))}
        </nav>
    )
}
