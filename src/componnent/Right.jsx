import React, { useState } from "react";
import { RiDeleteBin6Line, RiH1 } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { PiEyeDuotone } from "react-icons/pi";
import { BsPersonCheck } from "react-icons/bs";
import { GoPeople } from "react-icons/go";

function Right() {
    const data = [
        {
            text : "Applicants",
            logo : <GoPeople />,
            number: 400
        },
        {
            text : "Matches",
            logo :<BsPersonCheck />,
            number: 100
        },
        {
            text : "Messages",
            logo : <FiMessageSquare />,
            number: 187
        },
        {
            text : "Views",
            logo :<PiEyeDuotone /> ,
            number: 800
        },
        
    
      ]
  const [clickButton, setClickButton] = useState("edit");
  const [datainfo, setdatainfo] = useState(data)

  const HandelButtonClick = (btn) => {
    setClickButton(btn);
  };

 

  return (
    <div className="relative  ">
      <span className="h-[145vh] w-[1px] absolute  block bg-zinc-300">
        <hr />
      </span>

      <div className="py-6 mx-3 flex gap-2 ">
        <button
          onClick={() => HandelButtonClick("delete")}
          className={
            clickButton === "delete"
              ? `py-2 px-8 font-[GeneralSans] font-medium text-white rounded-lg  bg-[#DC4A2D] border-[1px] border-[#DC4A2D] flex items-center gap-2`
              : `py-2 px-8 font-[GeneralSans] font-medium text-[#DC4A2D] rounded-lg  bg-[#FEF4F2] border-[1px] border-[#DC4A2D] flex items-center gap-2`
          }
        >
          <RiDeleteBin6Line /> Delete Job
        </button>
        <button
          onClick={() => HandelButtonClick("edit")}
          className={
            clickButton === "edit"
              ? `py-2 px-10 rounded-lg text-white border-[1px] border-[#DC4A2D] font-[GeneralSans] font-medium bg-[#DC4A2D] flex items-center gap-2 `
              : `py-2 px-10 rounded-lg text-[#DC4A2D] border-[1px] border-[#DC4A2D] font-[GeneralSans] font-medium bg-[#FEF4F2] flex items-center gap-2 `
          }
        >
          <MdOutlineModeEditOutline /> Edit Job
        </button>
      </div>

      <div className="edit-info px-10 ">
       {datainfo.map((itmes , index)=> <div  className="mt-4">
        <div className="flex items-center justify-between">
        <h1 className="text-[#4F4F4F] font-[GeneralSans] font-medium flex items-center gap-2" >{itmes.logo} {itmes.text}</h1>
        <h4 className="text-[#3D3D3D] font-[GeneralSans] font-semibold">{itmes.number}</h4>
        
       </div>
       <span className="h-[2px] block mt-6 bg-[#E7E7E7]">
        <hr />
      </span>
       </div>)}



      </div>
    </div>
  );
}

export default Right;
