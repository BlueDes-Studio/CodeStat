import React from "react";

const Button: React.FC = () => {
    return(
        <>
        <div className="flex w-[150px]  h-[53px] flex-row items-center justify-center">
        <button className="animate-border inline-block rounded-xl bg-gradient-to-r from-[#fd8d73] via-purple-500 to-yellow-300  bg-[length:400%_400%] p-[1.45px] hover:shadow-md hover:shadow-[#edab9c]">
         <span className="block rounded-[10px] bg-violet-700 shadow-inner px-5 py-3 font-normal text-white">Try for Free</span>
        </button>
        </div>
        </>
    )
}

export default Button;