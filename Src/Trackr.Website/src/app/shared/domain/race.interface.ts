import { Session } from "./session.interface";

export interface Race {
  id: number;
  name: string;
  location: string;
  url?: string;
  dateFrom: Date;
  dateTo?: Date;
  sessions: Session[];
}
