import { useChat } from "@/utils/ContextProvider";
// import { botResponse } from "@/utils/botResponse";
import { pushMessage } from "@/utils/pushMessage";
import useBot from "@/utils/useBot";
import React from "react";

const StartButton = () => {
  const { setChat } = useChat();
  const botResponse = useBot();

  const handleStart = () => {
    pushMessage(setChat, "/start", "user");
    botResponse("/start");
  };

  return (
    <div className="mx-auto w-full max-w-3xl p-2">
      <button
        className="w-full rounded-[20px] bg-vblue py-[10px] text-white hover:bg-vbluehover"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default StartButton;
