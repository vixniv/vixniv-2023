import { IChat } from "@/utils/interfaces";
import React from "react";

const TextBubble = ({ chat }: IChat) => {
  return (
    <>
      <div className="flex justify-start">
        <div className="mb-[14px] inline-block rounded-[20px] bg-vbackground px-[14px] py-[10px]">
          {chat.message}
          {/* Hi Judy, I'm on my way! What's the address? */}
        </div>
      </div>
    </>
  );
};

export default TextBubble;
