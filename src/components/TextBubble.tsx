import { useChat } from "@/utils/ContextProvider";
import { IChat } from "@/utils/interfaces";
import { markdownParser } from "@/utils/markdownParser";
import { pushMessage } from "@/utils/pushMessage";
import dayjs from "dayjs";
import Image from "next/image";
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
      {/* decide the width of bubble if contain img w-[464px] */}
      <div
        className={`mb-[14px] rounded-[20px] ${
          side === "user" ? "bg-vblue text-white" : "bg-vbackground text-black"
        }`}
      >
        <div className="image-container relative w-full pt-[56.25%]">
          <div className="absolute top-0 h-full w-full px-[5px] pt-[5px]">
            {/* <div className="image-placeholder  h-full w-full ">
              <div className="h-full w-full rounded-[22px] bg-vbackgroundhover"></div>
            </div> */}
            <Image
              src="/assets/sample.jpg"
              alt="sample"
              fill
              className="!static rounded-[17px] bg-vbackgroundhover object-cover"
            />
          </div>
        </div>
        {/* <Image
          src="/assets/sample.jpg"
          alt="sample"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full max-w-full rounded-[17px] object-cover px-[5px] pt-[5px]"
        /> */}

        <div className={`relative px-[14px] py-[10px]`}>
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
    </div>
  );
};

export default TextBubble;
