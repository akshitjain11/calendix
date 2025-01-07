'use client'

import { useState } from "react";
import TimeSelect from "./TimeSelect";
import { BookingTimes, WeekdayName } from "@/libs/types";
import clsx from "clsx";
import axios from "axios";

const weekdayNames:WeekdayName[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export default function EventTypeForm() {
    const [title,setTitle] = useState('');
    const [description,setDescription]=useState('');
    const [length,setLength]=useState(30);
    const [bookingTimes, setBookingTimes] = useState<BookingTimes>({});
    async function handleSubmit(ev) {
        ev.preventDefault();
        const response = await axios.post('/api/event-types',{title,description,length,bookingTimes});
        console.log({response})
    }
    function handleBookingTimeChange(day: WeekdayName, val:string|boolean,prop:'from' | 'to'|'active') {
        setBookingTimes(oldBookingTimes=>{
            const newBookingTimes:BookingTimes = {...oldBookingTimes};
            if (!newBookingTimes[day]) {
                newBookingTimes[day]={from:'00:00',to:'00:00',active:false};

            }
            newBookingTimes[day][prop]=val;
            return newBookingTimes;
        })
    }

    return (

        
        <form className="p-2 bg-gray-200 rounded-lg" onSubmit={handleSubmit}>
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
                    <div className="grid gap-2">
                        {weekdayNames.map((day) => {
                           
                            const active = bookingTimes?.[day]?.active;
                                
                            return (<div 
                                className=
                                    'grid grid-cols-2 gap-2 items-center'>
                                <label className="flex gap-1 !mb-0 !p-0">
                                    <input type="checkbox"  
                                            value={1}
                                            checked={bookingTimes?.[day]?.active}
                                            onChange={ev => handleBookingTimeChange(day,ev.target.checked,'active')}
                                            />
                                    {day} </label>
                            
                            
                            <div className={clsx("inline-flex gap-2 items-center ml-2",active? '':'opacity-40')}>
                                <TimeSelect 
                                    step={30}
                                    value={bookingTimes?.[day]?.from || '00:00'} 
                                    onChange={val=> handleBookingTimeChange(day,val,'from')} 
                                />
                                <span>-</span>
                                <TimeSelect step={30}
                                value={bookingTimes?.[day]?.to || '00:00'}
                                onChange={val=> handleBookingTimeChange(day,val,'to')} 
                                />
                            </div>
                            </div>)
                        }
                            
                            
                            
                        
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="btn-blue !px-8">Save</button>
            </div>
        </form>
    );
}
