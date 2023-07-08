import React, { createContext, useContext, useState } from "react";
import { IChatGroup } from "@/utils/interfaces";

const chatContext = createContext<{
  chat: IChatGroup[];
  setChat: React.Dispatch<React.SetStateAction<IChatGroup[]>>;
}>({ chat: [], setChat: () => [] });

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chat, setChat] = useState<IChatGroup[]>([]);

  return (
    <chatContext.Provider value={{ chat, setChat }}>
      {children}
    </chatContext.Provider>
  );
};

export default ContextProvider;

export const useChat = () => useContext(chatContext);
