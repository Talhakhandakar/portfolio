import Link from "next/link";
import { FC } from "react";
import { MessageCircleMore } from 'lucide-react';

interface INavBarProps {};

export const NavBar: FC<INavBarProps> = (props) => {
    return (
        <div className="flex justify-between items-center px-6 sm:px-4 container max-w-screen-xl mx-auto h-16 border-b border-slate-200">
            <div>
                <p className="uppercase font-thin text-gray-500 tracking-wider"><span className="font-black text-emerald-600">T</span>alha</p>
            </div>
            <div className="flex gap-6 text-gray-600 font-medium">
                <Link className="font-semibold text-emerald-500" href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
            </div>
            <div className="cursor-pointer w-8 h-8 bg-black rounded-full flex items-center justify-center"><MessageCircleMore className="w-5 h-5 text-white" /></div>
        </div>
    );
}
