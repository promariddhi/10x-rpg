import { ReactNode } from "react";

interface DiamondProps {
    children: ReactNode,
    className?: string
}

export default function DiamondBox({children, className="",}: DiamondProps) {
    return ( 
        <div className={`group relative clip-diamond size-20 p-2
                        bg-linear-to-b from-amber-400 to-amber-800 
                        ${className}`}>
            
            {/** Specular Highlight **/}
            <div className="absolute inset-0 pointer-events-none 
                            translate-x-[-150%] skew-x-[-25deg] 
                            bg-linear-to-r from-transparent via-white/60 to-transparent
                            transition-transform duration-700 ease-in-out
                            group-hover:translate-x-[150%]" />

            <div className="relative clip-diamond size-full bg-black 
                            flex flex-col items-center justify-center gap-y-0.5">
                {children}
            </div>
        </div>
    )
}