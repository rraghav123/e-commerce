"use client"
import { useMemo, useState } from "react";
import { getCategories } from "@/app/apis/fetchData";
import Category from "@/app/components/Category";
import { publish } from "@/app/utils/events";

import {EVENTS} from "@/enums/EVENTS";

function SideBar() {
    const categories = useMemo(() => getCategories(), []);
    const [currentCategory, setCurrentCategory] = useState(categories[0].id)

    function onSelect(categoryId: number) {
        setCurrentCategory(categoryId);
        publish(EVENTS.CATEGORY_SELECT, categoryId)
    }

    return (
        <div className="p-2">
            {categories.map(category =>
                <Category
                    name={category.name}
                    key={category.id}
                    active={currentCategory === category.id}
                    onSelect={onSelect}
                    id={category.id}
                />
            )}
        </div>
    )
}

export default SideBar;