import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

interface Props {
    data: any;
};

export const CategoriesBar = ({ data }: Props) => {
    return (
        <div className="relative w-full">
            <div className="">
                {data.map((category: Category) => (
                    <div key={category.id} className="mb-4">
                        <CategoryDropdown
                            category={category}
                            isActive={false}
                            isNavigationHovered={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
};