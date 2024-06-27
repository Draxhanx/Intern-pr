import React, { useState } from "react";
import Liner from "../utils/Liner";

function Subnav() {
  const [clickButton, setClickButton] = useState("job");

  const HandelButtonClick = (btn) => {
    setClickButton(btn);
  };

  console.log(clickButton);

  return (
    <>
      <div className="max-w-screen-2xl  py-4  ">
        <div className="subnavbar flex items-center gap-10 relative  ml-[13vh] ">
          <Liner
            text="Job Preview"
            id="job preview"
            isClick={clickButton === "job"}
            HandelButtonClick={() => HandelButtonClick("job")}
          />
          <Liner
            text="Applicants"
            id="applicants"
            isClick={clickButton === "applicants"}
            HandelButtonClick={() => HandelButtonClick("applicants")}
          />
          <Liner
            text=" Match"
            id="match"
            isClick={clickButton === "match"}
            HandelButtonClick={() => HandelButtonClick("match")}
          />
          <Liner
            text="Mesaages"
            id="messages"
            isClick={clickButton === "messages"}
            HandelButtonClick={() => HandelButtonClick("messages")}
          />
        </div>
      </div>

      <span className="h-[2px] block bg-zinc-300">
        <hr />
      </span>
    </>
  );
}

export default Subnav;
