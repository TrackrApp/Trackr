import { Session } from "./session.interface";

export interface Race {
  id: number;
  name: string;
  location: string;
  address: string;
  url?: string;
  headerImage: string;
  headerPosition: number;
  dateFrom: Date;
  dateTo?: Date;
  sessions: Session[];
}
