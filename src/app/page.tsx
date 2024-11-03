import React from 'react';

import Sidebar from "@/app/components/Sidebar";
import Products from "@/app/components/Products";
import { getProducts } from "@/app/apis/fetchData";

export default async function Home(): Promise<React.ReactNode> {
    const productsList = await getProducts();
    if(Array.isArray(productsList)) {
        return (
            <div className="grid grid-cols-7 h-[inherit]">
                <div className="">
                    <Sidebar/>
                </div>
                <div className="col-start-2 col-end-8 overflow-y-auto">
                    <Products initialData={productsList}/>
                </div>
            </div>
        )
    }
    return null;
}