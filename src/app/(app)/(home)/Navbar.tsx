"use client";
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavbarSidebar } from './navbar-sidebar';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700'],
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
    return (
        <Button
            asChild
            variant='outline' className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg", isActive && "bg-black text-white hover:bg-black hover:text-white")}>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}

const navbarItems = [
    { href: '/', children: 'Home' },
    { href: '/about', children: 'About' },
    { href: '/features', children: 'Features' },
    { href: '/pricing', children: 'Pricing' },
    { href: '/contact', children: 'Contact' },
]

export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <nav className='h-20 flex border-b justify-between font-medium bg-white'>
            <Link href='/' className='pl-6 flex items-center'>
                <span className={cn("text-5xl font-semibold", poppins.className)}>
                    funroad
                </span>
            </Link>
            <div className='items-center gap-4 hidden lg:flex ml-6'>
                {navbarItems.map((item) => (
                    <NavbarItem
                        key={item.href}
                        href={item.href}
                        isActive={pathname === item.href}>
                        {item.children}
                    </NavbarItem>
                ))}
            </div>
            <div className='hidden lg:flex'>
                <Button asChild className='border-l border-r-0 border-y-0 bg-white text-lg rounded-none h-full px-12 hover:bg-pink-400 transition-colors text-black'>
                    <Link href='/login'>Login</Link>
                </Button>
                <Button asChild className='border-l-0 border-r-0 border-y-0 bg-black text-lg rounded-none h-full px-12 hover:bg-pink-400 transition-colors text-white'>
                    <Link href='/signup'>Start Selling</Link>
                </Button>
                
            </div>
            <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
        </nav>
    )
}