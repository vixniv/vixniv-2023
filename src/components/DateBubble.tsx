import { IChatGroup } from "@/utils/interfaces";
import React from "react";

const DateBubble = ({ date }: IChatGroup) => {
  return (
    <div className="flex justify-center">
      <div className="mb-[14px] inline-block rounded-[20px] bg-vbackground px-[7px] py-[3px] text-xs text-vtext">
        {date}
      </div>
    </div>
  );
};

export default DateBubble;
