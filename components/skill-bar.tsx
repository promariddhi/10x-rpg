import DiamondBox from "./diamond-box";

interface skillBarProps {
    skill: string,
    currXp: number,
    maxXp: number,
    lvl: number
}

export default function SkillBar({skill, currXp, maxXp, lvl}: skillBarProps) {
    const progress: number = Math.trunc(currXp/maxXp * 100)
    return (
        <div className="group relative w-full">
            
            {/** Skill name and Xp */}
            <div className="absolute left-18 mt-1 flex flex-row right-3 justify-between">
                <p className="text-md">{skill}</p>
                <p>{currXp}/{maxXp} xp</p>
            </div>

            {/** Progress Bar **/}
            <div className="absolute left-16 right-0 mt-7 h-6 p-1 
                            [clip-path:polygon(0_0,calc(100%-0.75rem)_0,100%_50%,calc(100%-0.75rem)_100%,0_100%)]
                            bg-linear-to-r from-amber-400 to-amber-800">
                
                {/** Specular Highlight */}
                <div className=" absolute inset-0 h-10 skew-340 translate-x-[-150%] pointer-events-none
                                bg-linear-to-b from-transparent via-white to-transparent 
                                transition-transform duration-700 ease-in-out
                                group-hover:translate-x-[150%]" />

                <div className="w-full h-full
                                [clip-path:polygon(0_0,calc(100%-0.75rem)_0,calc(100%-2px)_50%,calc(100%-0.75rem)_100%,0_100%)]
                                bg-black">
                    <div className="h-full bg-amber-100" style={{width: `${progress}%`}}></div>
                </div>
            </div>

            <DiamondBox>
                <div className="size-6 rounded-full bg-white"></div>
                <p className="text-white text-[12px]">lvl {lvl}</p>
            </DiamondBox>
        </div>
    )
}