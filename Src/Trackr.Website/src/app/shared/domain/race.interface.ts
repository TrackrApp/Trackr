import { Session } from "./session.interface";

export interface Race {
  id: number;
  name: string;
  location: string;
  address: string;
  url?: string;
  headerImageUrl: string;
  headerPosition: number;
  eventLogoUrl: string;
  dateFrom: Date;
  dateTo?: Date;
  sessions: Session[];
}
