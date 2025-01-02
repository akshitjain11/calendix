'use server';
import DashboardNav from "@/app/components/DashboardNav";   
import EventTypeForm from "@/app/components/EventTypeForm";
import { session } from "@/libs/session";
import { EventTypeModel } from "@/models/EventType";
import { Plus } from "lucide-react";
import mongoose from "mongoose";
import Link from "next/link";


export default async function EventTypesPage() {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const email = await session().get('email');
    const eventTypes = await EventTypeModel.find({ email });

    return (
        <div>
            <DashboardNav />
            hello from event types
            {JSON.stringify(eventTypes)}
            <br />
            <Link className="btn-gray" 
            href="/dashboard/event-types/new">
                <Plus size={16}/>
                New event type</Link>
            
        </div>
    );
}
