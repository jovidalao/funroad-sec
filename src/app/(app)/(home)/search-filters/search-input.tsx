"use client";
import { ListFilterIcon, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { CustomCategory } from "../types";
import { CategoriesSidebar } from "./categories-sidebar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
    disabled?: boolean;
    data: CustomCategory[];
}

export const SearchInput = ({ data, disabled }: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex items-center gap-2 w-full">

            <CategoriesSidebar data={data} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
            <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
                <Input className="pl-8" placeholder="Search Products" disabled={disabled} />

            </div>
            <Button variant="elevated"
                className="flex size-12 shrink-0 lg:hidden"
                onClick={() => setIsSidebarOpen(true)}
            >
                <ListFilterIcon />
            </Button>
            <div>

            </div>
            {/* TODO: Add categories view all button */}
            {/* TODO: Add library button */}
        </div>
    )
}
