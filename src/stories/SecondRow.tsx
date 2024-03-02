import React from "react";


const SecondRow: React.FC = () => {
    return(
        <>
        <div className="flex gap-[48px]">
            <div className="w-[592px] h-[479px] relative bg-slate-900 rounded-[20px] flex-col justify-start items-start inline-flex">
                
            <div className="w-[479px] text-white text-[32px] font-semibold font-['inter] mx-[52px] my-[64px]">Centre for all your stats.</div>
            <div className="w-[279px] opacity-70 text-white text-base font-normal font-['SF Compact Text'] leading-tight mx-[52px]">The platform aggregates stats from diverse coding platforms, showcasing your problem-solving prowess in one insightful dashboard.</div>
            </div>
            <div>
            <div className="w-[440px] h-[479px] relative bg-slate-900 rounded-[20px] flex-col justify-start items-start inline-flex">
                <div className="w-[344px] text-white text-[32px] font-semibold font-['Inter] mx-[52px] mt-[64px]">Elevate your code</div>
                <div className="w-[344px] text-white text-[32px] font-semibold font-['Inter] mx-[52px] mt-[-1px]">game!</div>
                <div className="w-[279px] opacity-70 text-white text-base font-normal font-['SF Compact Text'] leading-tight mx-[52px] mt-[35px]">Tracking your work isn't just a record;<br/>it's a roadmap to <div className="inline-block text-white">growth</div></div>
            </div>
            </div>
        </div>
        <div className="w-[1080px] mt-[51px] h-12 text-center text-black text-[40px] font-semibold font-['SF Pro Display']">Everything detail in one platform</div>
        </>

    );
};


export default SecondRow;