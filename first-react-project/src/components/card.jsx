// import React from 'react'
import { Bookmark } from "lucide-react"
function card({ job }) {
    function filler(e) {
        if (e.style.fill == "black") {
            console.log("before ", e.style.fill)
            // console.log(parent)
            e.style.fill = "white"

            console.log("after ", e.style.fill)
        }
        else if (!e.style.fill || e.style.fill == "white") {
            console.log("before ", e.style.fill)
            e.style.fill = "black"
            // console.log(parent)
            console.log("after ", e.style.fill)

        }
    }
    return (
        <div className="card1 cards flex flex-col justify-between h-80  p-2 border-sm border-2 max-w-70 rounded-lg bg-white" >
            <div className='flex justify-between items-center'>
                <img className='w-9 border-[1.5px] border-slate-300 h-9 rounded-[18px] object-contain' src={job.cLogo} alt="Logo" />
                <div className="save text-zinc-900 flex items-center justify-center gap-1 cursor-pointer border-2 border-zinc-300 bg-zinc-100 px-2 py-0.5 rounded-[10px]" >save <Bookmark size={20} onClick={(e) => filler(e.target)} /></div>
            </div>

            <div className="info flex flex-col gap-3 p-1 pl-2">
                <div className="companyInfo flex items-center gap-1">
                    <div className="name  font-[599]">{job.cName}</div>
                    <div className="pDate font-extralight text-[12px] text-slate-500">{job.listingDays}</div>
                </div>
                <div className="jobName font-[650]">{job.jobTitle}</div>
                <div className="jobInfo flex gap-2">
                    <div className="timing  bg-gray-200 rounded-lg font-medium tracking-tighter px-1.5 text-zinc-750">{job.timing}</div>
                    <div className="expLevel  bg-gray-200 rounded-lg font-medium tracking-tighter px-1.5 text-zinc-750">{job.type}</div>
                </div>
            </div>
            <div className="linesepararot flex gap-2 flex-col">
                <hr className='w-65 text-zinc-300' />
                <div className="rateAndApply flex  justify-between items-center">
                    {/* <div className="separator w-full "></div> */}
                    <div className="rateAndLocation font-bold">
                        <div className="rate flex flex-col">{job.rate}</div>
                        <div className="location font-extralight text-[12px] text-slate-500 ">{job.location}</div>
                    </div>
                    <div className="apply bg-black text-white px-2 h-8 py-0.5 rounded-md flex items-center cursor-pointer">Apply now</div>
                </div>
            </div>
            <script src="./card.js"></script>
        </div>
    )
}

export default card
