import React from "react";

export default function Button({ icon,  tag,border, text , butonClick ,click }) {
 


  return (
    <div className="">
      <button
        onClick={() => butonClick()}
        className={click ? `  border-[1px] border-[#FCB4A5] bg-[#DC4A2D] px-6 py-3 rounded-[${border}] transition-all duration-500 text-lg font[Satoshi Variable] text-white font-medium flex items-center gap-1` : `border-[1px] border-[#ffffff] bg-[#ffffff] px-6 py-3 rounded-[${border}] text-lg font[Satoshi Variable] text-zinc-400 font-medium flex items-center gap-1`}
      >
        {" "}
        <span>{icon ? icon : ""}   </span> <span>{text==="message" ? tag : ""}</span> {text}
      </button>
    </div>
  );
}
