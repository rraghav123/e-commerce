'use client'

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {Chip} from "@nextui-org/chip";
import {Button} from "@nextui-org/react";

import Image from "next/image";
import {Product} from "@/app/utils/types";

export default function Products({ product }: { product: Product }) {
    return (
        <Card className="relative cursor-pointer py-4 flex flex-col justify-center items-center">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-3">
                <p className="text-tiny uppercase font-bold">{product.title}</p>
            </CardHeader>
            <CardBody className="flex-1 flex justify-center">
                <Image
                    src={product?.images[0]}
                    alt={product.title}
                    width={270}
                    height={270}
                    className="object-cover rounded-xl"
                />
                <Chip className="w-fit p-1 mt-2" variant="bordered">{product.category.name}</Chip>
            </CardBody>
            <CardFooter>
                <div className="flex justify-between items-center w-full">
                    <div>
                        <p className="text-slate-500 text-xs">Price</p>
                        <p>${product.price.toFixed(2)}</p>
                    </div>
                    <Button color="secondary" size="sm">
                        Add to Cart
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
