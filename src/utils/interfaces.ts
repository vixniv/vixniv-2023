export interface IChat {
  date: string;
  chat: {
    timestamp: number;
    type: string;
    message: string;
  };
}
