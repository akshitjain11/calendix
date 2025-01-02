'use client'

import { useState } from "react";
import TimeSelect from "./TimeSelect";

const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function EventTypeForm() {
    const [title,setTitle] = useState('');
    const [description,setDescription]=useState('');
    const [length,setLength]=useState(30);

    return (
        <form className="p-2 bg-gray-200 rounded-lg">
            create new event type:
            <div className="grid grid-cols-2 gap-4 ">
                <div>
                    <label>
                        <span>title</span>
                        <input type="text" placeholder="title" />
                    </label>
                    <label>
                        <span>description</span>
                        <textarea placeholder="description"></textarea>
                    </label>
                    <label>
                        <span>event length (minutes)</span>
                        <input type="number" placeholder="30" />
                    </label>
                </div>
                <div>
                    <span className="label">availability</span>
                    <div className="grid grid-cols-2 gap-2 items-center">
                        {weekdayNames.map((day) => (
                            <div key={day}>  {/* Adding key prop */}
                                {day}
                                <div className="inline-flex gap-2 items-center ml-2">
                                    <TimeSelect step={30} />
                                    <span>-</span>
                                    <TimeSelect step={30} />
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
