import React, { createContext, useContext, useState } from "react";
import { IChatGroup } from "@/utils/interfaces";

const chatContext = createContext<{
  chat: IChatGroup[];
  setChat: React.Dispatch<React.SetStateAction<IChatGroup[]>>;
}>({ chat: [], setChat: () => [] });

const commnadPositionContext = createContext<{
  commandPosition: string;
  setCommandPosition: React.Dispatch<React.SetStateAction<string>>;
}>({ commandPosition: "", setCommandPosition: () => "" });

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chat, setChat] = useState<IChatGroup[]>([]);
  const [commandPosition, setCommandPosition] = useState("");

  return (
    <chatContext.Provider value={{ chat, setChat }}>
      <commnadPositionContext.Provider
        value={{ commandPosition, setCommandPosition }}
      >
        {children}
      </commnadPositionContext.Provider>
    </chatContext.Provider>
  );
};

export default ContextProvider;

export const useChat = () => useContext(chatContext);
export const useCommandPosition = () => useContext(commnadPositionContext);
