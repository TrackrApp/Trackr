import { Race } from "src/app/shared/domain/race.interface";
import { Standing } from "src/app/shared/domain/standing.interface";

export interface ChampionshipOverview {
  id: number;
  name: string;
  description: string;
  championshipImageUrl: string;
  lastResult: Race;
  standings: Standing[];
}
