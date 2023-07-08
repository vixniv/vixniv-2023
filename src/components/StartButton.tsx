import { useChat } from "@/utils/ContextProvider";
import dayjs from "dayjs";
import React from "react";

const StartButton = () => {
  const { setChat } = useChat();

  const handleStart = () => {
    setChat((prev) => {
      return [
        ...prev,
        {
          date: dayjs().format("DD MMMM YYYY"),
          chat: [
            {
              timestamp: Date.now(),
              type: "text",
              side: "user",
              message: "/start",
            },
          ],
        },
      ];
    });
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
