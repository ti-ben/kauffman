import {Site} from "../../../site/model/site";
import {PayloadInterface} from "../../../../shared/model";

export interface NumberplateUpdatePayload extends PayloadInterface  {
  site_id: string;
  num_plate: string;
  dop: Date;
  active: string;
  site: Site;
}
