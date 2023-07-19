import DOMPurify from "dompurify";
import { IChatGroup } from "./interfaces";
import { pushMessage } from "./pushMessage";

export const markdownParser = (
  str: string,
  side: string
  // setChat: React.Dispatch<React.SetStateAction<IChatGroup[]>>
) => {
  const svgtest = `<svg class="inline ml-1" width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.125 2.25C3.09 2.25 2.25 3.09 2.25 4.125V13.875C2.25 14.91 3.09 15.75 4.125 15.75H13.875C14.91 15.75 15.75 14.91 15.75 13.875V11.625C15.75 11.3266 15.8685 11.0405 16.0795 10.8295C16.2905 10.6185 16.5766 10.5 16.875 10.5C17.1734 10.5 17.4595 10.6185 17.6705 10.8295C17.8815 11.0405 18 11.3266 18 11.625V13.875C18 14.969 17.5654 16.0182 16.7918 16.7918C16.0182 17.5654 14.969 18 13.875 18H4.125C3.03098 18 1.98177 17.5654 1.20818 16.7918C0.434597 16.0182 0 14.969 0 13.875V4.125C0 3.03098 0.434597 1.98177 1.20818 1.20818C1.98177 0.434597 3.03098 0 4.125 0H6.375C6.67337 6.28765e-09 6.95952 0.118526 7.1705 0.329505C7.38147 0.540483 7.5 0.826631 7.5 1.125C7.5 1.42337 7.38147 1.70952 7.1705 1.9205C6.95952 2.13147 6.67337 2.25 6.375 2.25H4.125ZM9 1.125C9 0.826631 9.11853 0.540483 9.32951 0.329505C9.54048 0.118526 9.82663 0 10.125 0H16.875C17.1734 0 17.4595 0.118526 17.6705 0.329505C17.8815 0.540483 18 0.826631 18 1.125V7.875C18 8.17337 17.8815 8.45952 17.6705 8.6705C17.4595 8.88147 17.1734 9 16.875 9C16.5766 9 16.2905 8.88147 16.0795 8.6705C15.8685 8.45952 15.75 8.17337 15.75 7.875V3.8415L10.92 8.6715C10.8162 8.7789 10.692 8.86454 10.5547 8.92344C10.4174 8.98233 10.2698 9.0133 10.1204 9.01452C9.97104 9.01575 9.82291 8.98722 9.68468 8.93059C9.54645 8.87395 9.42088 8.79036 9.3153 8.68468C9.20973 8.579 9.12625 8.45336 9.06975 8.31507C9.01325 8.17679 8.98485 8.02864 8.98622 7.87926C8.98759 7.72988 9.01869 7.58228 9.07772 7.44505C9.13674 7.30782 9.2225 7.18373 9.33 7.08L14.16 2.25H10.125C9.82663 2.25 9.54048 2.13147 9.32951 1.9205C9.11853 1.70952 9 1.42337 9 1.125Z" fill="${
    side === "user" ? "white" : "#007AFF"
  }"/></svg>`;
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
    .replace(/</g, "&lt;") // escape html
    .replace(/\*\*([^ ][\w ]+[^ ])\*\*/g, "<b>$1</b>") // bold
    .replace(
      /(?<![\S])(\/[\w+]{3,})/g,
      `<span class='cursor-pointer hover:underline ${
        side === "user" ? "text-white" : "text-vblue"
      }' onclick='clickedCommand(this)'>$1</span>`
    ) // command
    .replace(
      /!\[(.+)\]\(([^\s]+)\)/g,
      `<span class='cursor-pointer hover:underline' onclick='clickedLocalLink(this, "$2")'>$1</span>`
    ) // local link
    .replace(
      /\[(.+)\]\(([^\s]+)\)/g,
      `<a class='inline-flex items-center ${
        side === "user" ? "text-white" : "text-vblue"
      }' href='$2' target='_blank'>$1${svgtest}</a>`
    ) // link
    .trim();

  // console.log(sanitazedStr);
  // console.log(toHTML);
  // console.log(DOMPurify.sanitize(toHTML));

  return toHTML;
};
