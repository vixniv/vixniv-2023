declare global {
  interface Window {
    clickedCommand: (e: HTMLSpanElement) => void;
  }
}

export interface IChatGroup {
  date: string;
  chat?: IChat[];
}

export interface IChat {
  timestamp: number;
  type: string; // text or image
  side: string; // user or bot
  message: string;
}
