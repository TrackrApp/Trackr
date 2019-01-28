import { Result } from "./result.interface";
import { Session } from "./session.interface";

export interface ChampionshipOverview {
  id: number;
  name: string;
  description: string;
  standings: Result[];
  lastRaceResult: Session;
}
