import { IChat } from "@/utils/interfaces";
import dayjs from "dayjs";
import React from "react";

const TextBubble = ({ message, side, timestamp }: IChat) => {
  const formattedTime = dayjs(timestamp).format("HH:mm");

  return (
    <div
      className={`flex w-10/12 ${
        side === "user" ? "ml-auto justify-end" : "mr-auto justify-start"
      }`}
    >
      <div
        className={`relative mb-[14px] inline-block rounded-[20px] px-[14px] py-[10px] ${
          side === "user" ? "bg-vblue text-white" : "bg-vbackground text-black"
        }`}
      >
        <span className="whitespace-pre-wrap">{message}</span>
        <span className="invisible pl-2 text-xs text-vbackground">
          {formattedTime}
        </span>
        <div
          className={`absolute bottom-[7px] right-[14px] text-xs ${
            side === "user" ? "text-vbackground" : "text-vtext"
          }`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default TextBubble;
