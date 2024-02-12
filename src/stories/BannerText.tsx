import React from "react";

/**
 * Banner Text for the landing page
 */
export const BannerText: React.FC = () => {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-white font-SFProDisplay text-3xl font-semibold">
        Unveil Your Code Saga
      </h1>
      <p className="text-transparent bg-gradient-to-r from-[#B34EE2] from-30% via-[#FD846F] via-50% to-[#FEF99D] to-60% bg-clip-text font-SFProDisplay text-3xl font-semibold">
        Your Journey, Your Progress, Your Story.
      </p>
    </div>
  );
};
