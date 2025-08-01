import { FC } from "react";
import Image from "next/image";
interface IHeroProps {};

export const Hero: FC<IHeroProps> = (props) => {
    return (
        <div className="flex flex-col-reverse gap-8 md:flex-row py-24 items-center px-6 sm:px-4 container max-w-screen-xl mx-auto">
            <div className="md:w-[60%] w-full space-y-2">
                <p className="text-gray-500">Hey, I'm Shreash 👋</p>
                <p className="font-black text-4xl lg:text-6xl uppercase"><span className="text-emerald-600">Front</span>End</p>
                <p className="font-black text-4xl lg:text-6xl uppercase">Developer</p>
                <p className="text-gray-500">I'm a frontend developer with a passion for creating beautiful and functional user interfaces.</p>
                <div className="flex gap-4 pt-4">
                    <button className="bg-emerald-600 text-white px-6 py-2 rounded-md">Get in touch</button>
                    <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-2 rounded-md">Browse projects</button>
                </div>
            </div>
            <div className="md:w-[40%] w-full flex md:justify-end">
                <div className="border-2 rounded-full border-gray-300 p-6">
                <Image width={500} height={500} className="rounded-full grayscale w-48 md:w-64 aspect-square" src="/img/profile.jpg" alt="Hero" />
                </div>
            </div>
        </div>
    );
}
