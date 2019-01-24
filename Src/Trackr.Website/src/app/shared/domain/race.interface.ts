import { Session } from "./session.interface";

export interface Race {
  id: number;
  name: string;
  location: string;
  url?: string;
  sessions: Session[];
}
