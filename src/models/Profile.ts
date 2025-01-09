import mongoose, { models,model,Schema } from "mongoose";
import { unique } from "next/dist/build/utils";


interface IProfile extends mongoose.Document{
    email:string;
    interface:string;
}

const ProfileSchema = new Schema({
    email: {type:String,required:true,unique:true},
    username: {type:String,required:true,unique:true},
})

export const ProfileModel = models?.Profile || model<IProfile>('Profile',ProfileSchema);