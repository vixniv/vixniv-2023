import React, { createContext, useContext, useState } from "react";
import { IChat } from "@/utils/interfaces";

const chatContext = createContext<{
  chat: IChat[];
  setChat: React.Dispatch<React.SetStateAction<IChat[]>>;
}>({ chat: [], setChat: () => [] });

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chat, setChat] = useState<IChat[]>([]);

  return (
    <chatContext.Provider value={{ chat, setChat }}>
      {children}
    </chatContext.Provider>
  );
};

export default ContextProvider;

export const useChat = () => useContext(chatContext);
