import Head from "next/head";
import Header from "@/components/Header";
import StartButton from "@/components/StartButton";
import NoMessages from "@/components/NoMessages";
import { useChat, useCommandPosition, useModal } from "@/utils/ContextProvider";
import GroupBubble from "@/components/GroupBubble";
import InputField from "@/components/InputField";
import { useRef, useEffect } from "react";
import { pushMessage } from "@/utils/pushMessage";
import useBot from "@/utils/useBot";
import ImageModal from "@/components/ImageModal";

export default function Home() {
  const { chat, setChat } = useChat();
  const { commandPosition } = useCommandPosition();
  const botResponse = useBot();
  const { isModalShow } = useModal();
  const chatDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatDom.current) {
      chatDom.current.scrollTo({
        top: chatDom.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [chat]);

  useEffect(() => {
    window.clickedCommand = (e: HTMLSpanElement) => {
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
      <main className="m-auto flex h-full flex-col justify-between">
        <Header type="delete" />
        <div
          className="h-full overflow-x-hidden overflow-y-scroll"
          ref={chatDom}
        >
          <div className="mx-auto h-full max-w-3xl px-2 py-[14px] sm:translate-x-[3px]">
            {chat.length === 0 ? (
              <NoMessages />
            ) : (
              chat.map((group) => <GroupBubble key={group.date} {...group} />)
            )}
          </div>
        </div>
        {chat.length > 0 ? <InputField /> : <StartButton />}
      </main>
      {isModalShow && <ImageModal />}
    </>
  );
}
