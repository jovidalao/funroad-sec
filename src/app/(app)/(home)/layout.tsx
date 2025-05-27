import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { SearchFilters } from "./search-filters";
import { CustomCategory } from './types';

interface Props {
    children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {

    const payload = await getPayload({
        config: configPromise,
    });
    const data = await payload.find({
        collection: 'categories',
        depth: 1,
        pagination: false, // Disable pagination to fetch all top-level categories
        where: {
            parent: {
                exists: false, // Fetch only top-level categories without a parent 
            }
        },
        sort: 'name', // Sort categories by name
    });

    const formattedData: CustomCategory[] = data.docs.map((doc) => ({
        ...doc,
        subcategories: (doc.subcategories?.docs ?? []).map((subDoc) => ({
            // Use "as Category" because of "depth: 1" we are confident subDoc will be a type of Category.
            ...(subDoc as CustomCategory),
            subcategories: undefined, 
        }))
    }))

    console.log('Data fetched from Payload CMS:', data," formatted:", formattedData);
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SearchFilters data={formattedData}/>
            <div className="flex-1 bg-[#F4F4F0]">
                {children}
            </div>
            <Footer />
        </div>
    );
}
export default Layout;