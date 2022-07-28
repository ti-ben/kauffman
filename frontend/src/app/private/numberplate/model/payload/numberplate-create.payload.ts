import {Site} from "../../../site/model/site";

export interface NumberplateCreatePayload {
  num_plate: string;
  dop: Date;
  active: string;
  site: Site;
}
