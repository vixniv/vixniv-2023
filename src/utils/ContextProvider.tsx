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

const modalContext = createContext<{
  isModalShow: boolean;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isModalShow: false, setIsModalShow: () => false });

const clickedImageContext = createContext<{
  clickedImage: {
    url: string;
    ratio: number;
    width: number;
  };
  setClickedImage: React.Dispatch<
    React.SetStateAction<{
      url: string;
      ratio: number;
      width: number;
    }>
  >;
}>({
  clickedImage: {
    url: "",
    ratio: 0,
    width: 0,
  },
  setClickedImage: () => "",
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chat, setChat] = useState<IChatGroup[]>([]);
  const [commandPosition, setCommandPosition] = useState("");
  const [isModalShow, setIsModalShow] = useState(false);
  const [clickedImage, setClickedImage] = useState({
    url: "",
    ratio: 0,
    width: 0,
  });

  return (
    <chatContext.Provider value={{ chat, setChat }}>
      <commnadPositionContext.Provider
        value={{ commandPosition, setCommandPosition }}
      >
        <modalContext.Provider value={{ isModalShow, setIsModalShow }}>
          <clickedImageContext.Provider
            value={{ clickedImage, setClickedImage }}
          >
            {children}
          </clickedImageContext.Provider>
        </modalContext.Provider>
      </commnadPositionContext.Provider>
    </chatContext.Provider>
  );
};

export default ContextProvider;

export const useChat = () => useContext(chatContext);
export const useCommandPosition = () => useContext(commnadPositionContext);
export const useModal = () => useContext(modalContext);
export const useClickedImage = () => useContext(clickedImageContext);
