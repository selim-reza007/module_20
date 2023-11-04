"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {

    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="h-40 pb-1 shadow-lg">
            <div className="max-w-6xl h-full mx-auto flex flex-col">
                <div className="h-[70%] w-32 pt-7">
                    <Link href={'/'} className="h-full text-6xl"><span className="text-orange-400">.b</span>log</Link>
                </div>
                <div className="h-[30%] w-full">
                    <ul className="flex bg-black h-full text-white items-center">
                        <li><Link className="text-xl px-5 py-3 hover:bg-[#cb5500]" href={'/'}>Home</Link></li>
                        <li><Link className="text-xl px-5 py-3 hover:bg-[#cb5500]" href={'/unauthorized/service'}>Service</Link></li>
                        <li><Link className="text-xl px-5 py-3 hover:bg-[#cb5500]" href={'/unauthorized/blog'}>Blog</Link></li>
                        <li><Link className="text-xl px-5 py-3 hover:bg-[#cb5500]" href={'/unauthorized/about'}>About</Link></li>
                        <li><Link className="text-xl px-5 py-3 hover:bg-[#cb5500]" href={'/unauthorized/contact'}>Contact</Link></li>
                        <li className="ml-[540px]">
                            {isLogin ? <Link className="text-xl bg-[#e57185] px-5 py-3 hover:bg-red-800" href={'/'}>Logout</Link> : <Link className="text-xl bg-green-600 px-5 py-3 hover:bg-blue-200 hover:text-black" href={'/login'}>Login</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}