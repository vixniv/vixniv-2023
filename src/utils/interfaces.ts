export interface IChatGroup {
  date: string;
  chat?: IChat[];
}

export interface IChat {
  timestamp: number;
  type: string;
  side: string;
  message: string;
}
