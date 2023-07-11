import DOMPurify from "dompurify";
import { IChatGroup } from "./interfaces";
import { pushMessage } from "./pushMessage";

export const markdownParser = (
  str: string,
  side: string
  // setChat: React.Dispatch<React.SetStateAction<IChatGroup[]>>
) => {
  /* 
    have an issue of _utils_pushMessage__WEBPACK_IMPORTED_MODULE_3__ is not defined. 
    i think it's because the pushMessage still not exported and executed since the onclick need to be render immediately 
  */
  // const handleCommand = (e: HTMLSpanElement) => {
  //   console.log(pushMessage);
  //   pushMessage(setChat, e.innerText, side);
  // };

  const sanitazedStr = DOMPurify.sanitize(str);
  const toHTML = sanitazedStr
    .replace(/\*\*([^ ][\w ]+[^ ])\*\*/g, "<b>$1</b>") // bold
    .replace(
      /(?<![\S])(\/[\w+]{3,})/g,
      `<span class='cursor-pointer hover:underline ${
        side === "user" ? "text-white" : "text-vblue"
      }' onclick='clickedCommand(this)'>$1</span>`
    )
    .trim();

  // console.log(sanitazedStr);
  // console.log(toHTML);
  // console.log(DOMPurify.sanitize(toHTML));

  return toHTML;
};
