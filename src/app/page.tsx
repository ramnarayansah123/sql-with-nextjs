"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function NavBar(){
    const {status, data: session}= useSession();

   

    return(
        <>
        <div className="flex bg-slate-200 p-3 space-x-3">
            <Link href="/">Next.js</Link>
            <Link href="/Users">Users</Link>
            {status === "loading" &&<div>Loading...</div>}
            {status === "authenticated" && <div>{session.user!.name}<Link href="/api/auth/signout" className="m-3">Sign Out</Link></div>}
            {status === 'unauthenticated' &&<Link href="/api/auth/signin">Login</Link>}
        </div>
        
        
        </>
    )
}