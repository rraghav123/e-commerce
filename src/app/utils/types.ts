interface category  {
    name: string,
    id: number,
}
export type Product = {
    category: category,
    _id: string,
    id: string,
    title: string,
    price: number,
    description: string,
    images: Array<string>
}

export type Category = {
    id: number,
    name: string,
}