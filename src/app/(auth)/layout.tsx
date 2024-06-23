"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [input, setInput] = useState("");
    const pathName = usePathname();
    
    return (
        <>
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                className="border"
            />
        </div>
        <div>
            {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href);
                console.log(pathName.toString());
                return (
                    <Link href={link.href} key={link.name} className={isActive ? 'font-bold mr-4': 'text-blue-500 mr-4'}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
        </>
    );
}