import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { set } from 'date-fns';
import { on } from 'events';

interface NavbarItem {
    href: string;
    children: React.ReactNode;
    
}
interface Props {
    items: NavbarItem[];
    open?: boolean;
    onOpenChange: (open: boolean) => void;
}
export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <div className='flex lg:hidden'>
                <SheetTrigger asChild>
                    <Button
                        variant='ghost'
                        className='size-12 border-transparent h-full'>
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
            </div>
            <SheetContent side="left" className="p-0">
                <SheetHeader className='p-4 border-b'>
                    <div>
                        <SheetTitle className='text-2xl font-semibold'>
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className='flex flex-col h-full overflow-y-auto pb-2'>
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className='w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium p-4 text-black'
                            onClick={() => onOpenChange(false)}
                        >
                            {item.children}
                        </Link>
                    ))}
                    <div className='border-t'>
                        <Link href={'/login'} className='w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium p-4 text-black'>
                        Login
                        </Link>
                        <Link href={'/signup'} className='w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium p-4 text-black'>
                        Start Selling
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}