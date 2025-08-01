import { FC } from "react";
import { Globe } from "./globe";
interface IAboutProps {};

export const About: FC<IAboutProps> = (props) => {
    return (
        <div className="px-6 sm:px-4 container max-w-screen-xl mx-auto">
            <div className="flex items-end gap-1">

            <h1 className="text-5xl font-black">About me</h1>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mb-0.5"></span>
            </div>
            <p className="text-gray-500 mt-2 border-l-4 pl-2 border-emerald-500">Developing beautiful and functional website is what i love doing, and that's why I give my all in every new challenge.</p>
        
        <div className="grid grid-cols-3">
            <div>test</div>
            <div className="relative col-span-2">

            <Globe />
            </div>
        </div>
        </div>
    )
}
