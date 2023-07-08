import React, { useState } from "react";
import Arrow from "../../public/assets/arrow.svg";

const InputField = () => {
  const [textareaRows, setTextareaRows] = useState(1);
  const [linebreak, setLinebreak] = useState(1);

  // const handleTextAreaKeyDown = (
  //   e: React.KeyboardEvent<HTMLTextAreaElement>
  // ) => {
  //   // console.log((e.target as HTMLInputElement).value.split("\n").length);
  //   if (e.code === "Enter") setTextareaRows((prev) => prev + 1);
  // };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "0";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 164)}px`;
    e.target.scrollTop = e.target.scrollHeight; // keep scroll to bottom

    // console.log(e.target.value.split("\n").length);
    // const currentLinebreak = e.target.value.split("\n").length;
    // if (currentLinebreak !== linebreak) {
    //   setLinebreak(currentLinebreak);
    // }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl items-center p-2">
      <textarea
        className="h-[44px] w-full resize-none rounded-[20px] bg-vbackground px-3 py-[10px] outline-none placeholder:text-vtext"
        placeholder="Message"
        maxLength={1000}
        // rows={linebreak <= 6 ? linebreak : 6}
        onChange={handleTextAreaChange}
      ></textarea>
      <div className="ml-1 flex h-[44px] w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-vbackground">
        <Arrow className="rotate-180" />
      </div>
    </div>
  );
};

export default InputField;
