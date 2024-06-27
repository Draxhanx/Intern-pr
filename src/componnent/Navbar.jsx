import React, { useState } from "react";
import Button from "../utils/Button";
import { IoBagRemoveOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

function Navbar() {
  const [clickButton, setClickButton] = useState("jobs");

  const HandelButtonClick = (btn) => {
    setClickButton(btn);
  };

  return (
    <div className="max-w-screen-2xl ">
      <div className="navbar  py-2 px-7 flex items-center justify-between gap-10">
        <button className="logo text-xl font-semibold text-[#DC4A2D] px-5 py-3 bg-zinc-200  font-[Satoshi Variable]">
          Logo
        </button>
        <div className="button w-[28vw] py-1 px-1 justify-between flex border-[1px] rounded-[50px] border-zinc-400  ">
          <Button
            id="Jobs"
            text="Jobs"
            border="50px"
            icon={<IoBagRemoveOutline />}
            click={clickButton === "jobs"}
            butonClick={() => HandelButtonClick("jobs")}
          />
          <Button
            id="Messages"
            click={clickButton === "messages"}
            butonClick={() => HandelButtonClick("messages")}
            text="Messages"
            border="50px"
            icon={<FiMessageSquare />}
          />
          <Button
            id="Payments"
            click={clickButton === "payments"}
            butonClick={() => HandelButtonClick("payments")}
            text="Payments"
            border="50px"
            tag={
              <span className="w-[7px] h-[7px] absolute rounded-full left-5 bg-red-600 block"></span>
            }
            icon={<IoBagRemoveOutline />}
          />
        </div>
        <div className="icons relative flex items-center gap-3">
          <span className="cursor-pointer">
            <span className="w-[7px] h-[7px] cursor-pointer  absolute rounded-full left-5  bg-red-600 block"></span>
            <IoNotificationsOutline size="2em" />
          </span>
          <span className="w-[35px] cursor-pointer h-[35px] flex">
            <img
              className="rounded-full"
              src="https://s3-alpha-sig.figma.com/img/7622/cd8b/0141197fff7d64b94226a8c17be3edce?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4Y8yiQzPLyWBrt9QqkZn7pR9okvDvC3NgGSV0UGkZuif1-plYp3IhOBV9zw~Y1G4~M~pSheAtnedkSiFzfvqxS1fjySDbX7Zaq8CficHwF10YRGHeGn0zCc9BwvPkqhDzf7tY6lg6lSaAZzUujt5zZ-QEk7WU~qCI~vZo5tpoUmE4KvJmAGIaoHnm5WHe6cg72RJ~NVhCU~1AV9mBVQHKGlohMZM3if9KzQlAq~xSN7O1HoDQP7hyaascss9aWBVsh7SHG~m91DwYa8TfnPrcAY~uBpYzDed8qWVC-x7mkgYM9fRkwiHbxD9rvbSq08mC-dRvKzdt40pdf4TTaFBA__"
              alt=""
            />
          </span >
         <span className="block cursor-pointer">  <FaAngleDown /></span>
        </div>
      </div>
      <span className="h-[2px] block bg-zinc-300">
        <hr />
      </span>
    </div>
  );
}

export default Navbar;
