import {Site} from "../../site/model/site";
import {Status} from "../../status/model/status";

export interface User {
   user_id: String,
   firstname:String,
   lastname:String,
   gender:String,
   avatar:String,
   dob:Date,
   email:String,
   password:String,
   phone_pro:String,
   phone_perso:String,
   nationality: String,
   numirn:String,
   driver_license:String,
   created_on:Date,
   updated_on:Date,
   pob:String,
   active: Boolean,
   site_id: Site,
   //address: Address,
   status_id: Status
}
