import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import Header from "@/components/Header";
import StartButton from "@/components/StartButton";
import TextBubble from "@/components/TextBubble";
import NoMessages from "@/components/Nomessages";
import { useChat } from "@/utils/ContextProvider";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { chat } = useChat();

  return (
    <>
      <Head>
        <title>Vixniv</title>
        <meta name="description" content="Vixniv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-auto flex h-full flex-col justify-between ">
        <Header />
        <div className="h-full overflow-auto">
          <div className="mx-auto h-full max-w-3xl px-3 pt-[14px]">
            {chat.length === 0 ? (
              <NoMessages />
            ) : (
              chat.map((item) => <TextBubble {...item} />)
            )}
          </div>
        </div>
        <StartButton />
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
