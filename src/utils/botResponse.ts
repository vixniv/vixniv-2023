import { availableCommands, data } from "./data";
import { delay } from "./delay";
import { IChatGroup } from "./interfaces";
import { pushMessage } from "./pushMessage";

export const botResponse = (
  setChat: React.Dispatch<React.SetStateAction<IChatGroup[]>>,
  command: string
) => {
  const commandIndex = availableCommands.indexOf(command);
  if (commandIndex !== -1) {
    data[commandIndex]?.response.message?.forEach(async (message, index) => {
      await delay(500 * (index + 1));
      pushMessage(setChat, message, "bot");
    });
  }
};
