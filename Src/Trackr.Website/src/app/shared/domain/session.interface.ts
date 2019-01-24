import { Result } from "./result.interface";
import { SessionType } from "./sessionType.interface";

export interface Session {
  name: string;
  sessionType: SessionType;
  results: Result[];
}
