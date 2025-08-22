"use client"
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { FC, useState } from "react";
interface IExpProps {};

export const Exp: FC<IExpProps> = (props) => {
    const brands = ["Apple", "Google", "Facebook", "Microsoft", "Spotify"]
    const [selectedBrand, setSelectedBrand] = useState(brands[0])
    return (
        <div className="mt-16 px-6 sm:px-4 container max-w-screen-xl mx-auto">
            <h1 className="text-5xl font-black" >Experience</h1>
            <div className="flex gap-8 items-start mt-6">
                <div className=" flex flex-col w-40 items-start gap-2 text-gray-600">
                    {brands.map((brand)=>(
                    <button onClick={()=>setSelectedBrand(brand)} className={cn("cursor-pointer", selectedBrand==brand && "text-emerald-500 font-semibold")} key={brand}>{brand}</button>
                    ))}
                   
                </div>
                <div>
                    {selectedBrand == "Apple" && <Apple />}
                </div>
            </div>
        </div>
        
    );
}

const Apple = ()=>{
    return (
        <div>
            <p>Engineer @ Apple</p>
        </div>
    )
}
