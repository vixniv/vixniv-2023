import { availableCommands } from "./data";
import { delay } from "./delay";
import { IChatGroup } from "./interfaces";
import { pushMessage } from "./pushMessage";

export const botResponse = async (
  setChat: React.Dispatch<React.SetStateAction<IChatGroup[]>>,
  message: string
) => {
  const commandIndex = availableCommands.indexOf(message);
  if (commandIndex !== -1) {
    await delay(500);
    pushMessage(setChat, message, "bot");
  }
};
