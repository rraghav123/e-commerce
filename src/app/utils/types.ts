export type Product = {
    category: object,
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