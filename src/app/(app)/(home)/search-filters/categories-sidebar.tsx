import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CustomCategory } from "../types";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data: CustomCategory[]; //TODO: remove this later.
};

export const CategoriesSidebar = ({ open, onOpenChange, data }: Props) => {
    const [subCategories, setSubCategories] = useState<CustomCategory[] | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<CustomCategory | null>(null);

    const currentCategories = subCategories ?? data ?? [];
    const router = useRouter();
    const handleCategoryClick = (category: CustomCategory) => {
        setSelectedCategory(category);
        if (category.subcategories && category.subcategories.length > 0) {
            setSubCategories(category.subcategories as CustomCategory[]);
        } else if (!subCategories && selectedCategory) {
            if (selectedCategory.slug === "all") {
                router.push("/");
            } else {
                router.push(`/${selectedCategory.slug}`);
            }
            onOpenChange(false);
        }
        else if (selectedCategory) {
            router.push(`/${selectedCategory.slug}/${category.slug}`);
            onOpenChange(false);
        }
    }


    return (
        <div>
            <Sheet open={open} onOpenChange={onOpenChange}>
                <SheetContent side="right" className="p-0 transition-none bg-white">
                    <SheetHeader className="p-4 border-b">
                        <SheetTitle>
                            {selectedCategory ? selectedCategory.name : "Category"}
                        </SheetTitle>
                    </SheetHeader>
                    <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                        {subCategories && (
                            <button onClick={() => {
                                setSelectedCategory(null);
                                setSubCategories(null);
                            }} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                                <ChevronLeftIcon className="size-4 mr-2" />
                                Back
                            </button>
                        )}
                        {
                            currentCategories.map((category) => (
                                <div className="w-full text-left p-0 hover:bg-black hover:text-white flex items-center text-base font-medium justify-between border-0">
                                    <button
                                        key={category.id}
                                        className="p-4"
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category.name}
                                    </button>
                                    {category.subcategories && category.subcategories.length > 0 &&
                                        <ChevronRightIcon className="size-4" />}
                                </div>
                            ))
                        }
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    )
};