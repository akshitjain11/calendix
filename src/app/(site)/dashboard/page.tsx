import DashboardNav from "@/app/components/DashboardNav";
import ProfileForm from "@/app/components/ProfileForm";
import { session } from "@/libs/session";
import { ProfileModel } from "@/models/Profile";
import axios from "axios";
import mongoose from "mongoose";
import { FormEvent, useState } from "react";

export default async function DashboardPage() {
    const email = await session().get('email');
    mongoose.connect(process.env.MONGODB_URI as string);
    const profileDoc = await ProfileModel.findOne({email})
    return (
        <div>
        <ProfileForm existingUsername={profileDoc?.username || ""}/>
       

        </div>
    )
}