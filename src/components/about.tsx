import { FC } from "react";
import { Globe } from "./globe";
import { MyStack } from "./my-stack";
interface IAboutProps {};

export const About: FC<IAboutProps> = (props) => {
    return (
        <div className="px-6 sm:px-4 container max-w-screen-xl mx-auto">
            <div className="flex items-end gap-1">

            <h1 className="text-5xl font-black">About me</h1>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mb-0.5"></span>
            </div>
            <p className="text-gray-500 mt-2 border-l-4 pl-2 border-emerald-500">Developing beautiful and functional website is what i love doing, and that's why I give my all in every new challenge.</p>
        
        <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
<p className="text-xl font-semibold mb-4">My Stack.</p>
            <div className="bg-gray-300 rounded-xl py-8  px-4 h-64">
                <MyStack />
            </div>
            </div>
            <div className="col-span-2 h-full relative">
            <p className="text-xl font-semibold mb-4">My special place</p>

            <div className="relative p-8 h-64 bg-gray-300 rounded-xl overflow-hidden">

            <Globe />
            </div>
            </div>
        </div>
        </div>
    )
}
