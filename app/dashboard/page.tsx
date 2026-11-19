import Badge from "@/components/badge";
import Hexagon from "@/components/hexagon";
import SkillBar from "@/components/skill-bar";
import { ReactNode } from "react";

interface skillCompletion {
    name: string
    maxXp: number,
    currXp: number,
    lvl: number
}

interface activity {
    title: string,
    description: string,
    date: string,
    time: string
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

    const pinnedBadges: string[] = ["Novice", "Campaigner", "King", "Hunter"]

    const rawActivityFeed: activity[] = [
        {title: "Quest Completed", description: "You completed a quest", date: "25 November 2026", time: "02:00"},
        {title: "Campaign Completed", description: "You completed a campaign", date: "24 November 2026", time: "22:00"},
        {title: "Skill Leveled", description: "You leveled up a skill", date: "25 November 2026", time: "20:00"},
        {title: "Rank Up", description: "You ranked up", date: "23 November 2026", time: "16:00"},
        {title: "Quest Completed", description: "You completed a quest", date: "23 November 2026", time: "14:00"},
        {title: "Level Up", description: "You levelled up", date: "25 November 2026", time: "12:00"},
    ]

    const activityFeed: activity[][] = 
        [...rawActivityFeed]
            .sort((a, b)=> {
                const dateA = new Date(`${a.date} ${a.time}`)
                const dateB = new Date(`${b.date} ${b.time}`)
                return dateB.getTime()-dateA.getTime()
            })
            .reduce((acc: activity[][], item) => {
                const lastGroup = acc[acc.length-1]
                lastGroup?.length>0 && lastGroup[0].date===item?.date ? lastGroup.push(item) : acc.push([item]) 
                return acc 
            },[])
    
    
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
                            <SkillBar key={i.name} skill={i.name} currXp={i.currXp} maxXp={i.maxXp} lvl={i.lvl} />
                            ))
                        }
                    </div>
                </div>

                {/** Column 3 */}
                <div className="col-span-4 bg-gray-100 flex flex-col gap-y-8 p-4 min-h-0">
                    {/** Badges */}
                    <div className="flex flex-col">
                        <h1 className="text-xl mx-4 leading-none">Badges</h1>
                        <div className="grid grid-cols-3 gap-2 p-4 place-items-center">
                            {pinnedBadges.map((i,_)=>(
                                <div className="aspect-square w-full flex flex-col justify-center items-center
                                                bg-gray-300 border-gray-400 border-2 rounded-sm
                                                hover:bg-gray-200 transition-colors duration-300 ease-in-out" key={i}>
                                    <Badge key={i} name={i} />
                                </div>))}
                        </div>
                    </div>

                    {/** Activity */}
                    <div className="flex flex-col gap-y-4 px-6 min-h-0">
                        <h1 className="text-xl leading-none">Recent Activities</h1>

                        {/** Scrollable Content */}
                        <div className="flex flex-col gap-y-4 min-h-0 flex-1 overflow-y-auto scrollbar-hidden">
                            {activityFeed.map(
                                (group)=>(
                                    <ActivityDateGroup key={group[0].date} date={group[0].date}>
                                        {group.map((activity)=>(<ActivityItem key={activity.time} title={activity.title} time={activity.time} description={activity.description}/>))}
                                    </ActivityDateGroup>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface activityDateGroupProps {
    children: ReactNode,
    date: string
}

function ActivityDateGroup({children, date}:activityDateGroupProps) {
    return (
        <div className="relative">
            <div className="flex flex-row mx-3 items-center gap-3">
                <p className="shrink-0 text-[12px] text-gray-700">{date}</p>
                <div className="h-0.5 w-full bg-gray-300" />
            </div>
            {children}
        </div>
    )
}

interface activityItemProps {
    title: string,
    time: string,
    description: string
}

function ActivityItem({title, time, description}:activityItemProps) {
    return (
        <div className="m-0">
            <div className="absolute left-9 w-0.5 top-6 bottom-0 bg-gray-300" />
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col">
                    <div className="flex flex-row mx-3 px-2 items-center">
                        <div className="bg-gray-300 border-2 border-gray-100 rounded-full size-8" />
                        <p className="mx-1">{title}</p>
                        <p className="ml-auto text-[12px] text-gray-600">{time}</p>
                    </div>
                    <p className="mx-15 leading-none text-[14px] text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    )
}