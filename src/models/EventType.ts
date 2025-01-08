import { BookingTimes } from '@/libs/types';
import { FromTo, WeekdayName } from '@/libs/types';
import mongoose, {Model, model, models, Schema, Types} from 'mongoose';



const FromToSchema = new Schema ({
    from:String,
    to:String,
    active:Boolean,
})

export interface IEventType extends mongoose.Document {
    email:string;
    uri:string;
    title:string;
    description:string;
    length:number;
    bookingTimes:BookingTimes;
    createdAt: Date;
    updatedAt: Date;
}



const BookingSchema = new  Schema<Record<WeekdayName,FromTo>>({
    monday: FromToSchema,
    tuesday: FromToSchema,
    wednesday:FromToSchema,
    thursday:FromToSchema,
    friday:FromToSchema,
    saturday:FromToSchema,
    sunday:FromToSchema,
})
const EventTypeSchema = new Schema<IEventType>({
    email: String,
    uri:{type:String},
    title: String,
    description: String,
    length: Number,
    bookingTimes: BookingSchema
},{
    timestamps:true,
});



export const EventTypeModel = models?.EventType as Model<IEventType> || model<IEventType>('EventType',EventTypeSchema)