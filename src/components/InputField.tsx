import React, { useRef, useState } from "react";
import Arrow from "../../public/assets/arrow.svg";
import { useChat } from "@/utils/ContextProvider";
import { pushMessage } from "@/utils/pushMessage";
// import { botResponse } from "@/utils/botResponse";
import useBot from "@/utils/useBot";

const InputField = ({
  chatDom,
}: {
  chatDom: React.RefObject<HTMLDivElement>;
}) => {
  const [message, setMessage] = useState("");

  const { setChat } = useChat();
  const botResponse = useBot();
  const textAreaDom = useRef<HTMLTextAreaElement>(null);

  const handleTextAreaKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.code === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "0";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 164)}px`;
    e.target.scrollTop = e.target.scrollHeight; // keep scroll to bottom

    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message) {
      pushMessage(setChat, message, "user");

      setMessage("");
      if (textAreaDom.current) {
        textAreaDom.current.style.height = "44px";
        textAreaDom.current.focus(); // this make page scroll on mobile when keyboard open, need solution!
      }

      botResponse(message);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl items-center p-2">
      <textarea
        className="h-[44px] w-full resize-none rounded-[20px] bg-vbackground px-3 py-[10px] outline-none placeholder:text-vtext"
        placeholder="Message"
        maxLength={1000}
        // rows={linebreak <= 6 ? linebreak : 6}
        value={message}
        onChange={handleTextAreaChange}
        onKeyDown={handleTextAreaKeyDown}
        ref={textAreaDom}
      ></textarea>
      <div
        className="ml-1 flex h-[44px] w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-vbackground hover:bg-vbackgroundhover"
        onClick={handleSubmit}
      >
        <Arrow className="rotate-180" />
      </div>
    </div>
  );
};

export default InputField;
