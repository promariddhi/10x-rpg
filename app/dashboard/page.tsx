import SkillBar from "@/components/skill-bar";

interface skillCompletion {
    name: string
    maxXp: number,
    currXp: number,
    lvl: number
}

export default function Dashboard() {
    const skillCompletion: skillCompletion[] = [
        {name: "Software Engineering", maxXp:100, currXp:70, lvl: 2},
        {name: "Debugging & Performance", maxXp:100, currXp:40, lvl: 10},
        {name: "Application Security", maxXp:100, currXp:30, lvl: 100},
        {name: "AI Engineering", maxXp:100, currXp:10, lvl: 55},
        {name: "Architecture & System", maxXp:100, currXp:50, lvl: 16},
        {name: "Business & Product", maxXp:100, currXp:55, lvl: 30},
    ]
    
    
    return (
        <div className="absolute inset-0 flex flex-col">
            <div className="w-full h-full bg-blue-100 grid grid-cols-11 gap-x-8 p-8">
                <div className="col-span-3 bg-gray-100"></div>
                
                
                {/** Column 2 */}
                <div className="col-span-4 bg-gray-100 flex flex-col p-4 gap-y-4">
                    
                    {/** Name Level Rank */}
                    <div className="bg-gray-300 w-full h-32"></div>
                    
                    {/** Skills */}
                    <div className="bg-gray-300 w-full flex flex-col gap-y-4 p-4">
                        {
                            skillCompletion.map((i, _)=>(
                            <SkillBar skill={i.name} currXp={i.currXp} maxXp={i.maxXp} lvl={i.lvl} />
                            ))
                        }
                    </div>
                </div>

                {/** Column 3 */}
                <div className="col-span-4 bg-gray-100 flex flex-col gap-y-8 p-4">
                    {/** Badges */}
                    <div className="h-1/2 bg-gray-500 grid grid-cols-3 gap-4 p-4 place-items-center">
                        {[...Array(9)].map((_,i)=>(<div className="bg-white rounded-full aspect-square w-24" key={i}></div>))} 
                    </div>
                </div>
            </div>
        </div>
    )
}