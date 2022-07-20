import {Site} from "../../site/model/site";


export interface Numberplate {
  numberplate_id: String,
  num_plate: String,
  dop: Date,
  active: Boolean,
  site: Site
}
