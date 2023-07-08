import { useChat } from "@/utils/ContextProvider";
import React from "react";

const StartButton = () => {
  const { setChat } = useChat();

  const handleStart = () => {
    setChat((prev) => {
      return [
        ...prev,
        {
          date: "2021-10-05T02:00:00.000Z",
          chat: {
            timestamp: Date.now(),
            type: "user",
            message: "/start",
          },
        },
      ];
    });
  };

  return (
    <div className="mx-auto w-full max-w-3xl p-2">
      <button
        className="w-full rounded-full bg-vblue py-[10px] text-white"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default StartButton;
