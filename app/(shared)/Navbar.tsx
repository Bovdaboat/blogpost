import React from "react"
import Link from "next/link";

const Navbar = () => {
    return(
        <header className="mb-5">
            <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 PY-4">
                <div className="hidden sm:block">social links</div>
                <Link href='/'>Home</Link>
                <Link href='/'>Trending</Link>
                <Link href='/'>About</Link>
            </nav>
        </header>
    )
}

export default Navbar