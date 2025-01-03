import { FromTo, WeekdayName } from '@/libs/types';
import mongoose, {model, models, Schema} from 'mongoose';
import { EventType } from 'nylas';


const FromToSchema = new Schema ({
    from:String,
    to:String
})



const BookingSchema = new  Schema<Record<WeekdayName,FromTo>>({
    monday: FromToSchema,
    tuesday: FromToSchema,
    wednesday:FromToSchema,
    thursday:FromToSchema,
    friday:FromToSchema,
    saturday:FromToSchema,
    sunday:FromToSchema,
})
const EventTypeSchema = new Schema<EventType>({
    email: String,
    title: String,
    description: String,
    length: Number,
    bookingTimes: BookingSchema
},{
    timestamps:true,
});



export const EventTypeModel = models?.EventType || model<EventType>('EventType',EventTypeSchema)