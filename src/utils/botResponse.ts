import { commands } from "./data";
import { delay } from "./delay";
import { IChatGroup } from "./interfaces";
import { pushMessage } from "./pushMessage";

export const botResponse = (
  setChat: React.Dispatch<React.SetStateAction<IChatGroup[]>>,
  command: string
) => {
  const commandIndex = commands.findIndex((el) => el.command === command);
  if (commandIndex !== -1) {
    commands[commandIndex]?.response.forEach(
      async ({ image, message }, index) => {
        await delay(500 * (index + 1));
        pushMessage(setChat, message, "bot", image);
      }
    );
  }
};
