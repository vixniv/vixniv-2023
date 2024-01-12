import { commands, workList } from "./data";
import { pushMessage } from "./pushMessage";
import { delay } from "./delay";
import { useChat, useCommandPosition } from "./ContextProvider";

const useBot = () => {
  const { setChat } = useChat();
  const { commandPosition, setCommandPosition } = useCommandPosition();

  // handler for bot response
  const botResponse = (text: string) => {
    // if (text === "/back") {
    //   setCommandPosition("");
    //   return;
    // }

    if (commandPosition === "/work" && text !== "/back" && text !== "/work") {
      const workIndex = workList.findIndex((el) => el.id === Number(text));
      if (workIndex !== -1) {
        workList[workIndex]?.response.forEach(
          async ({ image, message }, index) => {
            await delay(500 * (index + 1));
            pushMessage(setChat, message, "bot", image);
          }
        );
      }
      return;
    }

    const commandIndex = commands.findIndex((el) => el.command === text);
    if (commandIndex !== -1) {
      commands[commandIndex]?.response.forEach(
        async ({ image, message }, index) => {
          await delay(500 * (index + 1));
          pushMessage(setChat, message, "bot", image);
        }
      );
      setCommandPosition(text);
    }
  };

  return botResponse;
};

export default useBot;
