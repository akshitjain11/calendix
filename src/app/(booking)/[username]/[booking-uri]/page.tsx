import { EventTypeModel } from "@/models/EventType";
import { ProfileModel } from "@/models/Profile";
import mongoose from "mongoose";
import { Clock, Info } from "lucide-react";
import TimePicker from "@/app/components/TimePicker";


type PageProps = {
    "params":{
    username:string,
    "booking-uri":string;}
}

export default async function BookingPage(props:PageProps) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const profileDoc = await ProfileModel.findOne({
        username:props.params.username
    })
    if (!profileDoc) {
        return 404;
    }
    const etDoc = await EventTypeModel.findOne({
        email:profileDoc.email,
        uri:props.params?.['booking-uri'],
    });
    if (!etDoc) {
        return 404;
    }
    return (
        <div className="flex items-center h-screen bg-cover" style={{backgroundImage: "url('/background.jpg')"}}>
            <div className="w-full text-center">
            <div className="inline-flex mx-auto shadow-md rounded-lg overflow-hidden">
                <div className="bg-blue-100/50 p-8 w-80 text-gray-800">
                    <h1 className="text-left text-2xl font-bold mb-4 pb-2 border-b border-black/10">{etDoc.title}</h1>
                    <div className="grid gap-y-4 grid-cols-[40px_1fr] text-left">
                    <div><Clock /></div>
                    <div>{etDoc.length}mins</div>
                    <div><Info /></div>
                        <div>{etDoc.description}</div>
                    </div>
                </div>
                <div className="bg-white/80 grow">
                    <TimePicker username={props.params.username} meetingURI={etDoc.uri} length={etDoc.length} bookingTimes={JSON.parse(JSON.stringify(etDoc.bookingTimes))}/>
                </div>
            </div>
            </div>
        </div>
    );
}