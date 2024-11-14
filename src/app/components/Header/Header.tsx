import React from "react";
import { ShoppingCart01Icon } from "hugeicons-react";

function Header(): React.ReactNode {
    return (
        <header className="p-5 flex justify-between">
            <p className="text-4xl font-bold flex-1 text-center">GShop</p>
            <div className="flex-1" />
            <figure className="flex-1 flex justify-end">
                <ShoppingCart01Icon size={32} />
            </figure>
        </header>
    )
}

export default Header;