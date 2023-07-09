import { availableCommands, data } from "./data";
import { delay } from "./delay";
import { IChatGroup } from "./interfaces";
import { pushMessage } from "./pushMessage";

export const botResponse = async (
  setChat: React.Dispatch<React.SetStateAction<IChatGroup[]>>,
  command: string
) => {
  const commandIndex = availableCommands.indexOf(command);
  if (commandIndex !== -1) {
    await delay(500);
    data[commandIndex]?.response.message?.forEach((message) => {
      pushMessage(setChat, message, "bot");
    });
  }
};
