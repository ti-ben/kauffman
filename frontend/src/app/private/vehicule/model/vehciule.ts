import {Site} from "../../site/model/site";
import {Numberplate} from "../../numberplate/model/business/numberplate";

export interface Vehicule {
  vehicule_id: string,
  active: Boolean,
  avatar: string,
  bought_by: string,
  brand: string,
  cde_carrosserie: string,
  classe_enviro: string,
  created_on: Date,
  date_of_purchase: Date,
  fuel: string,
  genre: string,
  metrology: string,
  mma: string,
  mmat: string,
  mom: string,
  mta: string,
  nbr_km: string,
  num_chassis: string,
  price: string,
  type: string,
  updated_on: Date,
  numberplate: Numberplate
  site: Site
}
