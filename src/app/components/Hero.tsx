'use client';
import { useEffect,useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";



export default function Hero() {
    const [showLine,setShowLine] = useState(false);
    const router = useRouter();
   
    useEffect(()=>{
        setShowLine(true);
    },[])
    return(
        <section className="text-center mt-24">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Scheduling <span className={"text-blue-600 cool-underline " + (showLine?'show-underline':'')}>
            made simple
            </span>
            <br />
          for people like you
          </h1>
        <p className="text-gray-600">Most scheduling apps are simple but calendix is even more simple<br />
        On top of this, its open source!</p>
        <div className="mt-4 flex gap-4 justify-center">
          <Link href={'/'} className="bg-black text-white py-2 px-4 rounded-full">
          Get Started for Free
          </Link>
          <Link href={'/'} className="border border-gray-300 rounded-full py-2 px-4 inline-flex gap-1 items-center text-gray-600">
          <Play size={16} />
          Watch Video
          </Link>
        </div>
      </section>
    );
}