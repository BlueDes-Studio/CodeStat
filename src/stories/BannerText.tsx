import React from "react";

/**
 * Banner Text for the landing page
 */
export const BannerText: React.FC = () => {
  return (
    <>
    <div className="flex flex-col text-center">
      <h1 className="text-white font-SFProDisplay text-5xl font-semibold">
        Unveil Your Code Saga
      </h1>
      <p className="text-transparent bg-gradient-to-r from-[#B34EE2] from-30% via-[#FD846F] via-50% to-[#FEF99D] to-60% bg-clip-text font-SFProDisplay text-5xl font-semibold mt-2 mb-1">
        Your Journey, Your Progress, Your Story.
      </p>
    </div>
    <div className="w-[1080px] h-6 opacity-70 text-center text-white text-xl font-normal font-['SF Compact Text'] mt-5 ml-[60px]"> A platform to have a glance of all your coding </div>
    </>
  );
};
