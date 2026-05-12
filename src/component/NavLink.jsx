"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";





const NavLink = ({ children, href }) => {
    const pathname = usePathname()
    const isActive = pathname === href
    return (<Link href={href} className={`${isActive && "underline"}`} >
        {children}
    </Link>)
}

export default NavLink;