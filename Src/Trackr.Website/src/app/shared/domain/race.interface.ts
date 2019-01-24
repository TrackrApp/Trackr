import { Session } from "./session.interface";

export interface Race {
  name: string;
  location: string;
  url?: string;
  sessions: Session[];
}
