//Navbar.js
"use client"; // Declare the component as a Client Component

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession(); // Use useSession hook to access session data
    console.log(session);
    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt='logo' width={144} height={30} />
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session.user ? (
                        <>
                            <Link href={"/startup/create"}>
                                <span>Create</span>
                            </Link>

                            <button type="button" onClick={() => signOut({ redirect: "/" })}>
                                Logout
                            </button>

                            <Link href={`user/${session.id}`}>
                                <span>{session.user.name}</span>
                            </Link>
                        </>
                    ) : (
                        <button type="button" onClick={() => signIn('github')}>
                            Login
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
