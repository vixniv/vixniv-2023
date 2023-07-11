import { useChat } from "@/utils/ContextProvider";
import { IChat } from "@/utils/interfaces";
import { markdownParser } from "@/utils/markdownParser";
import { pushMessage } from "@/utils/pushMessage";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const TextBubble = ({ message, side, timestamp }: IChat) => {
  const { setChat } = useChat();

  const formattedTime = dayjs(timestamp).format("HH:mm");

  // react-markdown can't handle ol, so we have to parse it manually
  // const components = {
  //   ol({ children, ...props }: any) {
  //     // console.log(children);
  //     const list = children.filter((child: any) => child.type === "li");
  //     const content = list
  //       .map((item: any, index: number) => {
  //         return (
  //           index +
  //           1 +
  //           "." +
  //           (item.props.children ? " " + item.props.children[0] : "")
  //         );
  //       })
  //       .join("\n");
  //     console.log(children);
  //     return <p>{content}</p>;
  //   },
  // };

  return (
    <div
      className={`flex w-10/12 ${
        side === "user" ? "ml-auto justify-end" : "mr-auto justify-start"
      }`}
    >
      <div
        className={`relative mb-[14px] inline-block rounded-[20px] px-[14px] py-[10px] ${
          side === "user" ? "bg-vblue text-white" : "bg-vbackground text-black"
        }`}
      >
        <span
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: markdownParser(message, side),
          }}
        />
        {/* <ReactMarkdown
            components={components}
            disallowedElements={["img"]}
            unwrapDisallowed={true}
          >
            {message}
          </ReactMarkdown> */}

        <span className="invisible pl-2 text-xs text-vbackground">
          {formattedTime}
        </span>
        <div
          className={`absolute bottom-[7px] right-[14px] text-xs ${
            side === "user" ? "text-vbackground" : "text-vtext"
          }`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default TextBubble;
