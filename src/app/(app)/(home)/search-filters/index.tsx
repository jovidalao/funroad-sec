import { CustomCategory } from "../types";
import { CategoriesBar } from "./categories-bar";
import { SearchInput } from "./search-input";

interface Props {
    data: CustomCategory[];
};

export const SearchFilters = ( { data }:Props ) => {
    return (
        <div className="flex flex-col m-6 gap-4">
            <SearchInput data={data} />
            <div className="hidden lg:block">
            <CategoriesBar data={data} />
            </div>
        </div>
    );
};