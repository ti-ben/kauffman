import {Site} from "../../site/model/site";

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
   site: Site,
   //address: Address,
   //status: Status
}
