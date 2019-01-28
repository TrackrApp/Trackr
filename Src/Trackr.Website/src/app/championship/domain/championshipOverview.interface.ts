import { Session } from "src/app/shared/domain/session.interface";
import { Standing } from "src/app/shared/domain/standing.interface";

export interface ChampionshipOverview {
  id: number;
  name: string;
  description: string;
  standings: Standing[];
  lastRaceResult: Session;
}
