import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import Header from "@/components/Header";
import StartButton from "@/components/StartButton";
import NoMessages from "@/components/NoMessages";
import { useChat } from "@/utils/ContextProvider";
import GroupBubble from "@/components/GroupBubble";
import InputField from "@/components/InputField";
import { useRef, useEffect } from "react";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { chat } = useChat();
  const chatDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatDom.current) {
      chatDom.current.scrollTo({
        top: chatDom.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
      // chatDom.current.scrollTop = chatDom.current.scrollHeight;
    }
  }, [chat]);

  return (
    <>
      <Head>
        <title>Vixniv</title>
        <meta name="description" content="Vixniv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-auto flex h-full flex-col justify-between ">
        <Header />
        <div className="h-full overflow-auto" ref={chatDom}>
          <div className="mx-auto h-full max-w-3xl px-3 pt-[14px]">
            {chat.length === 0 ? (
              <NoMessages />
            ) : (
              chat.map((group) => <GroupBubble key={group.date} {...group} />)
            )}
          </div>
        </div>
        {chat.length > 0 ? <InputField chatDom={chatDom} /> : <StartButton />}
      </main>
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
