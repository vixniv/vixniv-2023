import Arrow from "../../public/assets/arrow.svg";
import Image from "next/image";
import { useChat, useModal } from "@/utils/ContextProvider";

const Header = ({ type }: { type: string }) => {
  const { setIsModalShow } = useModal();
  const { chat, setChat } = useChat();

  const handleBack = () => {
    if (type === "back") {
      setIsModalShow(false);
    }
    if (type === "delete") {
      setChat([]);
    }
  };

  return (
    <header className="mx-auto w-full max-w-3xl p-2">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <button
            className={`flex items-center ${
              chat.length === 0 && "disabled-button"
            }`}
            onClick={handleBack}
          >
            <Arrow />
            <div className="ml-1 text-vblue">
              {type === "back" ? "Back" : "Don't"}
            </div>
          </button>
        </div>
        <div className="flex-1 text-center">
          <div className="font-bold">Yoram</div>
          <div className="text-xs text-vtext">last seen recently</div>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="relative h-10 w-10 rounded-full bg-vbackground">
            <Image
              src="/assets/vixnivpp.jpg"
              alt="vixniv profile picture"
              fill
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
