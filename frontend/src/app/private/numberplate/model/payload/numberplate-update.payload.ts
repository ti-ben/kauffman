import {Site} from "../../../site/model/site";

export interface NumberplateUpdatePayload {
  site_id: string;
  num_plate: string;
  dop: Date;
  active: string;
  site: Site;
}
