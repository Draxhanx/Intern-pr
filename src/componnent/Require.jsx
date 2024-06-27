import React from "react";
import { GrLocation } from "react-icons/gr";
import { LiaCoinsSolid } from "react-icons/lia";

function Require() {
  return (
    <>
      <div className="w-full py-5 flex flex-col itmes-center gap-2 ">
        <div className="ml-[13vh] flex items-center gap-5">
          <h1 className=" font-[GeneralSans] font-[600] text-[#3D3D3D] text-[4.2vh]">
            Senior Product Designer
          </h1>
          <div className="flex items-center gap-3">
            <h5 className=" font-[GeneralSans] text-sm font-semibold text-[#888888] flex items-baseline gap-2 ">
              <span className="w-[6px] h-[6px] block rounded-full bg-zinc-400"></span>
              posted 2 days ago
            </h5>
            <button className="px-3 border-[2px] rounded-full a border-[#ABEFC6] font-semibold text-[#067647] bg-[#ECFDF3] cursor-default flex items-center gap-1">
              {" "}
              <span className="w-[6px] h-[6px] block rounded-full bg-[#17B26A]"></span>{" "}
              <span className="mb-1">open</span>
            </button>
          </div>


        </div>
        <div className="loction ml-[13vh] flex gap-10 ">
        <h3 className="text-[#5D5D5D] font-medium font-[GeneralSans] text-lg flex items-center gap-2 "> <GrLocation />  Delaware,USA </h3>
        <h3 className="text-[#5D5D5D] font-medium font-[GeneralSans] text-lg flex items-center gap-2 "> <LiaCoinsSolid /> $300k-$400k</h3>

        </div>

        <span className="h-[2px] mt-5 block bg-zinc-300">
          <hr />
        </span>
      </div>
    </>
  );
}

export default Require;
