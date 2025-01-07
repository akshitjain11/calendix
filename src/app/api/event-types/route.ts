import { session } from "@/libs/session";
import { EventTypeModel } from "@/models/EventType";
import mongoose from "mongoose";
import { NextApiRequest } from "next";

import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const data = await req.json();
    const email = await session().get('email');
    console.log({email,data});
    const eventTypeDoc = await EventTypeModel.create({email,...data});
    return Response.json(eventTypeDoc);

}