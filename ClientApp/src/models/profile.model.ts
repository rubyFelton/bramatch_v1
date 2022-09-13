import {IBra} from "./bra.model";

export interface IProfile {
  userID: string,
  username: string,
  about: string,
  band: number,
  bust: number,
  point: number,
  system: string,
  reduction: boolean,
  binding: boolean,
  breastfeeding: boolean,
  implants: boolean,
  implantType: string,
  weightLoss: boolean,
  bras: IBra[]
}
