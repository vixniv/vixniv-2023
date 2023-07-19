import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import Header from "@/components/Header";
import StartButton from "@/components/StartButton";
import NoMessages from "@/components/NoMessages";
import { useChat, useCommandPosition, useModal } from "@/utils/ContextProvider";
import GroupBubble from "@/components/GroupBubble";
import InputField from "@/components/InputField";
import { useRef, useEffect } from "react";
import { pushMessage } from "@/utils/pushMessage";
// import { botResponse } from "@/utils/botResponse";
import useBot from "@/utils/useBot";
import ImageModal from "@/components/ImageModal";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { chat, setChat } = useChat();
  const { commandPosition } = useCommandPosition();
  const botResponse = useBot();
  const chatDom = useRef<HTMLDivElement>(null);
  const { isModalShow } = useModal();

  useEffect(() => {
    if (chatDom.current) {
      chatDom.current.scrollTo({
        top: chatDom.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [chat]);

  /* 
    alternative solution of direct added event to markdown string because import issue (webpack not defined) 
    _utils_pushMessage__WEBPACK_IMPORTED_MODULE_3__ 
  */
  // const clickedCommand = (e: MouseEvent) => {
  //   const content = (e.target as HTMLElement).textContent;
  //   // console.log((e.target as HTMLElement).textContent);
  //   if (content && content[0] === "/" && /\/[a-zA-Z]+/g.test(content)) {
  //     pushMessage(setChat, content, "user");
  //     botResponse(setChat, content);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", clickedCommand);

  //   return () => {
  //     window.removeEventListener("click", clickedCommand);
  //   };
  // }, []);

  useEffect(() => {
    window.clickedCommand = (e: HTMLSpanElement) => {
      // console.log(e);
      const content = e.textContent;
      if (content && content[0] === "/" && /\/[a-zA-Z]+/g.test(content)) {
        pushMessage(setChat, content, "user");
        botResponse(content);
      }
    };
  }, [commandPosition]);

  useEffect(() => {
    window.clickedLocalLink = (e: HTMLSpanElement, text: string) => {
      pushMessage(setChat, text, "user");
      botResponse(text);
    };
  }, [commandPosition]);

  return (
    <>
      <Head>
        <title>Vixniv</title>
        <meta name="description" content="Vixniv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-auto flex h-full flex-col justify-between ">
        <Header type="back" />
        <div className="h-full overflow-y-scroll" ref={chatDom}>
          <div className="mx-auto h-full max-w-3xl px-3 py-[14px]">
            {chat.length === 0 ? (
              <NoMessages />
            ) : (
              chat.map((group) => <GroupBubble key={group.date} {...group} />)
            )}
          </div>
        </div>
        {chat.length > 0 ? <InputField chatDom={chatDom} /> : <StartButton />}
      </main>
      {isModalShow && <ImageModal />}
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
