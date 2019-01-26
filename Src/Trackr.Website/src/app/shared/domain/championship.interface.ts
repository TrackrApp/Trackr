import { Race } from "./race.interface";

export interface Championship {
  id: number;
  name: string;
  races?: Race[];
}
