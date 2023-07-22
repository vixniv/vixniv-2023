import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/utils/ContextProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <div className={`${inter.variable} h-full font-sans`}>
      <SessionProvider session={session}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </SessionProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
