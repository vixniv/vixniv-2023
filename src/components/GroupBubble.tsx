import React from "react";
import DateBubble from "./DateBubble";
import TextBubble from "./TextBubble";
import { IChatGroup } from "@/utils/interfaces";

const GroupBubble = ({ date, chat }: IChatGroup) => {
  return (
    <div>
      <DateBubble date={date} />
      {chat!.map((chat) => (
        <TextBubble key={chat.timestamp} {...chat} />
      ))}
    </div>
  );
};

export default GroupBubble;
