'use client'

import React, { useState, useEffect } from 'react';
import Product from "@/app/components/Product";
import {Product as ProductType} from '@/app/utils/types';
import { EVENTS } from "@/enums/EVENTS";

interface CategorySelectEvent extends CustomEvent {
    detail: number;
}

export default function Products({ initialData }: { initialData: Array<ProductType> }) {
    const [data, setData] = useState(initialData);

    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        if(activeCategory === 0) setData(initialData);
        else {
            setData(() => initialData.filter(product => product.category.id === activeCategory))
        }
    }, [activeCategory, initialData]);

    useEffect(() => {
        function activeCategory(event: CategorySelectEvent) {
            setActiveCategory(event.detail)
        }
        // @ts-expect-error
        document.addEventListener(EVENTS.CATEGORY_SELECT, activeCategory);
        return () => {
            // @ts-expect-error
            document.removeEventListener(EVENTS.CATEGORY_SELECT, activeCategory);
        }
    }, []);

    if(!data) return <div>Loading...</div>
    return (
        <div className="grid grid-rows-auto grid-cols-4 gap-4 p-4 justify-center">
            {
                data.map((product):React.ReactNode => (
                    <Product product={product} key={product.id} />
                ))
            }
        </div>
    )
}