import {Site} from "../../../site/model/site";
import {PayloadInterface} from "../../../../shared/model";

export interface NumberplateCreatePayload extends PayloadInterface {
  num_plate: string;
  dop: Date;
  active: string;
  site: Site;
}
