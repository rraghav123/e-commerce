import React from 'react';
import clsx from "clsx";

type Category = {
    name: string,
    active: boolean,
    onSelect: (id: number) => void,
    id: number,
}

export default function Category({ id, name, active, onSelect }: Category): React.ReactElement {
    return (
        <button
            className={clsx("cursor-pointer p-4 flex flex-col w-full", {
                "border-l-4 border-indigo-800 font-bold": active,
                "ml-1": !active,
            })}
            onClick={() => onSelect(id)}
        >
            {name}
        </button>
    )
}