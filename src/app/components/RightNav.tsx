'use client';
import Link from "next/link";

export default function RightNav({email}:{email:string}) {
    const hasLoggedOut=typeof window !=='undefined' && window.location.href.includes('logged-out');
    console.log(hasLoggedOut);
    if (email && !hasLoggedOut) {
        return (
            <nav className="flex items-center gap-4">
        <Link href={'/dashboard'} className="btn-blue">Dashboard</Link>
        <a href={'/api/logout'}>Logout</a>
        </nav>

        );
    }
    else {
        return(
        <nav className="flex items-center gap-4">
      <Link href={'/api/auth'}>Sign In</Link>
      <Link href={'/about'} className="bg-blue-600 text-white py-2 px-4 rounded-full">Get Started</Link>
      </nav>
        );

    }
    
}