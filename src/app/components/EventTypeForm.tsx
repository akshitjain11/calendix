'use client'

import { useState } from "react";
import TimeSelect from "./TimeSelect";
import { BookingTimes, WeekdayName } from "@/libs/types";

const weekdayNames:WeekdayName[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export default function EventTypeForm() {
    const [title,setTitle] = useState('');
    const [description,setDescription]=useState('');
    const [length,setLength]=useState(30);
    const [bookingTimes, setBookingTimes] = useState<BookingTimes>({
        monday: { from: '', to: '' },
        tuesday: { from: '', to: '' },
        wednesday: { from: '', to: '' },
        thursday: { from: '', to: '' },
        friday: { from: '', to: '' },
        saturday: { from: '', to: '' },
        sunday: { from: '', to: '' }
    });
    function handleBookingTimeChange(day: WeekdayName, val:string) {

    }

    return (

        
        <form className="p-2 bg-gray-200 rounded-lg">
            create new event type:
            <div className="grid grid-cols-2 gap-4 ">
                <div>
                    <label>
                        <span>title</span>
                        <input type="text" placeholder="title" value={title} onChange={ev => setTitle(ev.target.value)}/>
                    </label>
                    <label>
                        <span>description</span>
                        <textarea placeholder="description" value={description} onChange={ev=>setDescription(ev.target.value)}></textarea>
                    </label>
                    <label>
                        <span>event length (minutes)</span>
                        <input type="number" placeholder="30" value={length} onChange={ev=>setLength(parseInt(ev.target.value))} />
                    </label>
                </div>
                <div>
                    <span className="label">availability</span>
                    <div className="grid grid-cols-2 gap-2 items-center">
                        {weekdayNames.map((day) => (

                            <div key={day}>  {/* Adding key prop */}
                                {day}
                                <div className="inline-flex gap-2 items-center ml-2">
                                    <TimeSelect 
                                        step={30}
                                        value={bookingTimes[day].from} 
                                        onChange={val=> handleBookingTimeChange(day,val,'from')} 
                                    />
                                    <span>-</span>
                                    <TimeSelect step={30}
                                    value={bookingTimes[day].to}
                                    onChange={val=> handleBookingTimeChange(day,val,'to')} 
                                    />
                                </div>
                            </div>
                        
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="btn-blue !px-8">Save</button>
            </div>
        </form>
    );
}
