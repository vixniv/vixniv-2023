import { IChat } from "@/utils/interfaces";
import React from "react";

const TextBubble = ({ message, side }: IChat) => {
  return (
    <>
      <div
        className={`flex w-10/12 ${
          side === "user" ? "ml-auto justify-end" : "mr-auto justify-start"
        }`}
      >
        <div
          className={`relative mb-[14px] inline-block rounded-[20px] px-[14px] py-[10px] ${
            side === "user"
              ? "bg-vblue text-white"
              : "bg-vbackground text-black"
          }`}
        >
          <span>Hi Judy, I'm on my way! What's the address? </span>
          <span className="invisible pl-1 text-xs text-vbackground">23:12</span>
          <div className="absolute bottom-[7px] right-[14px] text-xs text-vbackground">
            23:12
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBubble;
