import { Result } from "./result.interface";
import { SessionType } from "./sessionType.interface";

export interface Session {
  id: number;
  name: string;
  sessionType: SessionType;
  startTime: Date;
  results: Result[];
}
