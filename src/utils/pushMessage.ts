import dayjs from "dayjs";
import { IChatGroup } from "./interfaces";

export const pushMessage = (
  setChat: React.Dispatch<React.SetStateAction<IChatGroup[]>>,
  message: string,
  side: string
) => {
  setChat((prevMessage) => {
    const lastGroup = prevMessage[prevMessage.length - 1];
    const recentDate = dayjs().format("DD MMMM YYYY");

    // if the last array of the group date is today, push to last group date
    if (lastGroup && lastGroup.date === recentDate) {
      return [
        ...prevMessage.slice(0, prevMessage.length - 1),
        {
          ...lastGroup,
          chat: [
            ...(lastGroup.chat || []),
            {
              timestamp: Date.now(),
              type: "text",
              side: side,
              message: message,
            },
          ],
        },
      ];
    }

    // if not, create new group date
    return [
      ...prevMessage,
      {
        date: dayjs().format("DD MMMM YYYY"),
        chat: [
          {
            timestamp: Date.now(),
            type: "text",
            side: side,
            message: message,
          },
        ],
      },
    ];
  });
};
