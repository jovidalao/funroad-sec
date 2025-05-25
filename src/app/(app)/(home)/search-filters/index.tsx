import { CategoriesBar } from "./categories-bar";
import { SearchInput } from "./search-input";

interface Props {
    data: any;
};

export const SearchFilters = ( { data }:Props ) => {
    return (
        <div className="flex flex-col m-6 gap-4">
            <SearchInput disabled={false} />
            <CategoriesBar data={data} />
        </div>
    );
};