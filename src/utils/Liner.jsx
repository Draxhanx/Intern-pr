import React from 'react'

function Liner({text , isClick , HandelButtonClick}) {
  return (
    <div>
        <button className='' >

        <button onClick={()=>HandelButtonClick()}
            className={ isClick ?  ` transition-ease duration-300 text-md font-[GeneralSans] font-semibold text-[#DC4A2D] flex flex-col items-center  ` :  ` text-md font-[Satoshi Variable] font-semibold text-zinc-400 flex flex-col items-center  ` }
            href=""
          >
           {text}
         {isClick ?    <span className="h-[4px] w-[60px] block  top-4 relative  bg-[#DC4A2D]">
              <hr />
            </span> : ""}
          </button>
         
        </button>
    </div>
  )
}

export default Liner