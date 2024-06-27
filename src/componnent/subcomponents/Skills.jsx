import React from "react";

function Skills() {
  return (
    <>
    <div className="ml-[13vh]  flex  gap-28 ">
      <div className="Skills-require">
        <h3 className="font-[GeneralSans] text-[14px] text-[#6E6D6D] font-medium">
          Skills Require
        </h3>
        <div className="Skills py-2">
          <button className="  px-2 cursor-default flex mb-2  py-[2px] items-center gap-2 border-[1px] border-[#D0D5DD] rounded-lg ">
            <img
              className="w-[16px] h-[16px]"
              src="https://s3-alpha-sig.figma.com/img/a057/18e5/8cef2281a092b562908b4c6c49b90170?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jOCrkOT~mVKoMo0lX6BvO3HBZAyumj8o5E-rRhrgIhy3jBNbej0zdsUmjVz3lJdTeh5W4GBatzEu4BMCFHeY2o8PTwltt6stxNWLTJEhZLkz9XfOuXBZfzvc73igGbqXSEE2cmSaZw-hrG-C6kc-j9Nuy3rUMUSLnNt6WQ~5yuTz~J026z7o7~-5Z~v24ZJUO2r346dRZ94HRFP9KJJunt1eShfM9Aok~GEmsWybUp-yF4hDjxs79rEsGN3xP7xDNWFFXNwfC0~w7q2nBfp5M1lhBK-jo2A0UDCzopY2TmPU0kyCj49yoyAyBM2xu6ALjZC9Z36enTOtbFnlI1j57A__"
              alt=""
            />
            <h4 className="font-[GeneralSans]  text-[12px]  tracking-tight font-medium text-[#344054]">
              Figma
            </h4>
          </button>
          <button className="px-2 cursor-default mb-2 py-[2px] flex items-center gap-2 border-[1px] border-[#D0D5DD] rounded-lg">
            <img
              className="w-[16px] h-[16px]"
              src="https://s3-alpha-sig.figma.com/img/2a9e/347a/670a5f99deb267ece6bbca706e140b2e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbtxqtUW5D~Le83Zm4EHsIg-u6DTtR7~e0uDrMx~zp4KkoEk81147TNQh-LF9VCQrL56Lf8lkZq~NCtBCQd6xMNOeEMQ84xSE2eJSg0d7QJt24Eyv9jrIcOGxc4MvlC3PM4F~gy7P7U8kS~xwZda96bI0LilLcJSYMbldmgRTzSb8e1uo0BVQvYN-wMHNgszwQOfGT6clVh-XRw6fdDRfs0yXyr~XJGPgdNwVME-4cdHiV9GjDl6b7ICx~hClkoOfmtg~gmyQprRjKsPG8SqseLib~q3Q5spTvdokB~3lMYoub1rjLPlwkt0n-cTb~5ZyAbtB1D2mp26UNCVU0ObWQ__"
              alt=""
            />
            <h3 className="font-[GeneralSans] text-[12px]  tracking-tight font-medium text-[#344054]">
              Adobe Illustrator
            </h3>
          </button>

          <button className="px-2 flex cursor-default py-[2px] items-center gap-2 border-[1px] border-[#D0D5DD] rounded-lg">
            <img
              className="w-[16px] h-[16px]"
              src="https://s3-alpha-sig.figma.com/img/5193/29bf/3209900f02282f5bf4650dc4e0e5e138?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kukk3M2xErA7m-hIOrvFVvnGa31jb4F5Coufo9CxaNGkQyWXycOYfBRNooiltShWa2PbrgRxR4~uLV2quuMfCXB3WAoocLA2kQrZXCVePIm3qG9cAXiAt~2ktFUb79v6xdOQMtRMUjZq7SEvpPb1RqSxLIw3dQXMEVoGVRSwDq3OFiVRFqhdMEsRcEB0zBDfwwQRed0RhNfgv42bMCzIX89ffwNGTdnBDCG7V0BZYZsOM8pKYmwl--eENbiDy~R9KeSb59dCSD80nU0eBhaq3t9ukT835Uh2Rena0--5jkK5zueuZ8etipqbj~6s4BJVawKPjca2XdIt7geIPXArZg__"
              alt=""
            />
            <h3 className="font-[GeneralSans]  text-[12px] tracking-tight font-medium text-[#344054]">
              Adobe XD
            </h3>
          </button>
        </div>
      </div>
      <div className="language">
        <h1 className="font-[GeneralSans] text-[14px] text-[#6E6D6D] font-medium">
          Prefred Language
        </h1>
        <h3 className="font-[GeneralSans] text-[16px] text-[#3D3D3D] font-semibold">
          English
        </h3>
      </div>
      <div className="type">
        <h1 className="font-[GeneralSans] text-[14px] text-[#6E6D6D] font-medium">
          Type
        </h1>
        <h3 className="font-[GeneralSans] text-[16px] text-[#3D3D3D] font-semibold">
          Full Time
        </h3>
      </div>
      <div className="experience">
        <h1 className="font-[GeneralSans] text-[14px] text-[#6E6D6D] font-medium">
          Year Of Experience
        </h1>
        <h3 className="font-[GeneralSans] text-[16px] text-[#3D3D3D] font-semibold">
          3+ Year Of Experience
        </h3>
      </div>
    </div>
    <span className="h-[2px] mt-7  block bg-[#E7E7E7]">
        <hr />
      </span>
    </>
  );
}

export default Skills;
