import {Site} from "../../../site/model/site";
import {Status} from "../../../status/model/status";
import {Rank} from "../../../rank/model/rank";
import {Address} from "../../../address/model/address";

export interface User {
  user_id: string,
  firstname: string,
  lastname: string,
  gender: string,
  avatar: string,
  dob: Date,
  email: string,
  password: string,
  phone_pro: string,
  phone_perso: string,
  nationality: string,
  numirn: string,
  driver_license: string,
  created_on: Date,
  updated_on: Date,
  pob: string,
  active: Boolean,
  site: Site,
  address: Address,
  status: Status
  rank: Rank,
}
