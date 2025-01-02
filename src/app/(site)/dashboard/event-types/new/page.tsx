import DashboardNav from "@/app/components/DashboardNav";
import EventTypeForm from "@/app/components/EventTypeForm";
import Link from "next/link";

export default function NewEventTypePage() {
    return (
        <div>
            <DashboardNav />
            <div className="mt-4">
            <EventTypeForm />
            </div>
            
        </div>
    )
}