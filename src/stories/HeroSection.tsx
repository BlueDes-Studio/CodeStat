import React, { PropsWithChildren } from "react";

/**
 * The `HeroSection` function in TypeScript React renders a hero section with multiple images
 * positioned using CSS classes.
 * @returns The code snippet is a React functional component named HeroSection. It returns a JSX
 * structure containing multiple div elements with specific classNames and inline styles. Inside the
 * main div, there are three image elements with different classNames and styles. The images are
 * sourced from SVG files. The overall layout seems to be a hero section with background images and
 * overlapping elements.
 */
export const HeroSection: React.FC = () => {
    return(
    <>
  <div className="w-[810px] h-[266px] pl-[89px] pr-[89.12px] pt-[169.77px] bg-slate-900 bg-opacity-50 rounded-[20px] inline-flex justify-center items-center">
    <div className="w-[792.14px] h-[252.75px] relative flex items-center mt-[-400px] ml-[-80px]">
        <img className="w-[351px] h-[189px] left-0 top-[31.54px] absolute origin-top-left ml-[93px] mt-[45px] rotate-[-1.25deg] z-10" src="/left nav bar 1.svg"/>
        <img className="w-[435.09px] h-[221.38px] left-[357.45px] top-[13px] absolute origin-top-left mt-[66px] ml-[-38px] z-10" src="/left nav bar 2.svg"/>
        <img className="w-[730px] h-[190px] origin-top-left opacity-80 mt-[315px] ml-[50px]" src="/heat map 1.svg"/>
    </div>
    </div>
    </>
    );
}